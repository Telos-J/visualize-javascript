import { gsap } from 'gsap'
import { expressionStatements } from '../../js/parse'

let talkTimeline
let lookTimeline

function outputHandler() {
    let value = ''
    for (const expressionStatement of expressionStatements) {
        value += expressionStatement.value + '<br>'
    }

    if (!talkTimeline?.isActive()) {
        const computer = document.querySelector('#computer')
        const speechText = computer.querySelector('#speech-text tspan')
        const speechBubble = computer.querySelector('#speech-bubble')
        speechText.innerHTML = value
        gsap.to(speechBubble, { display: 'inline' })
        gsap.from(speechBubble, {
            scale: 0,
            x: -50,
            y: 150,
            transformOrigin: 'bottom right',
        })
        talk(value.length * 0.1)
    }
}

function talk(seconds) {
    const computer = document.querySelector('#computer')
    const smile = computer.querySelectorAll('#smile')
    const talk = computer.querySelectorAll('.talk')
    const speechBubble = computer.querySelector('#speech-bubble')
    gsap.set(smile, { display: 'none' })
    lookTimeline.tweenTo(0.25, { duration: 0.5 })
    talkTimeline = gsap
        .timeline({
            repeat: seconds * 2,
            onComplete: () => {
                gsap.set(smile, { display: 'inline' })
                lookTimeline.play()
            },
        })
        .set(talk[0], { display: 'inline' }, 0)
        .set(talk[0], { display: 'none' }, 0.1)
        .set(talk[1], { display: 'inline' }, 0.1)
        .set(talk[1], { display: 'none' }, 0.2)
        .set(talk[2], { display: 'inline' }, 0.2)
        .set(talk[2], { display: 'none' }, 0.3)
        .set(talk[3], { display: 'inline' }, 0.3)
        .set(talk[3], { display: 'none' }, 0.4)

    gsap.to(speechBubble, { display: 'none', delay: seconds })
}

function blink() {
    const computer = document.querySelector('#computer')
    const eyelids = computer.querySelectorAll('.eyelid')
    const pupils = computer.querySelectorAll('.pupil')
    gsap.timeline({ repeat: -1, yoyo: true }).to(eyelids, { y: 57, delay: 3, duration: 0.1 })
    lookTimeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 }).to(pupils, {
        x: 20,
        duration: 1,
    })
}

export { outputHandler, blink }
