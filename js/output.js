import { expressionStatements } from './parse'
import { gsap } from 'gsap'
let i = 0, talkTimeline, output

function clearOutput() {
    let output = document.querySelector('#output')
    let newOutput = output.cloneNode()
    output.parentNode.replaceChild(newOutput, output)

    return newOutput
}

function writeOutput(script) {
    let html = `<h1></h1>`

    let output = clearOutput();
    output.contentWindow.document.open();
    output.contentWindow.document.write(`
        ${html}
        <script>
        try {
            ${script}
        } catch (e) {
            console.error(e)
        }
        </script>
    `)
    output.contentWindow.document.close();
}

function outputConsole() {
    let value = ''
    console.log(expressionStatements)
    for (const expressionStatement of expressionStatements) {
        value += expressionStatement.value + '<br>'
    }

    if (!talkTimeline?.isActive()) {
        const speechText = output.querySelector('#speech-text')
        const speechBubble = output.querySelector('#speech-bubble')
        speechText.innerHTML = value
        gsap.to(speechBubble, { display: 'inline' })
        gsap.from(speechBubble, { scale: 0, x: -50, y: 150, transformOrigin: 'bottom right' })
        gsap.to(speechText, { display: 'flex' })
        gsap.from(speechText, { scale: 0, x: -15, y: 150, transformOrigin: 'bottom right' })

        talk(value.length * 0.1)
    }
}

function blink() {
    const eyelids = output.querySelectorAll('.eyelid')
    gsap.timeline({ repeat: -1, yoyo: true })
        .to(eyelids, { y: 57, delay: 3, duration: 0.1 })
}

function movePupil() {
    const pupils = output.querySelectorAll('.pupil')
    gsap.timeline({ repeat: -1, yoyo: true })
        .to(pupils, { x: 20, delay: 2, duration: 0.2 })

}

function talk(seconds) {
    const smile = output.querySelectorAll('#smile')
    const talk = output.querySelectorAll('.talk')
    const speechText = output.querySelector('#speech-text')
    const speechBubble = output.querySelector('#speech-bubble')
    gsap.set(smile, { display: 'none' })
    talkTimeline = gsap.timeline({ repeat: seconds * 2, onComplete: () => { gsap.set(smile, { display: 'inline' }) } })
        .set(talk[0], { display: 'inline' }, 0)
        .set(talk[0], { display: 'none' }, 0.1)
        .set(talk[1], { display: 'inline' }, 0.1)
        .set(talk[1], { display: 'none' }, 0.2)
        .set(talk[2], { display: 'inline' }, 0.2)
        .set(talk[2], { display: 'none' }, 0.3)
        .set(talk[3], { display: 'inline' }, 0.3)
        .set(talk[3], { display: 'none' }, 0.4)

    gsap.to([speechBubble, speechText], { display: 'none', delay: seconds })
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
    blink()
    movePupil()
})

export { outputConsole }
