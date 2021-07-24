import * as esprima from 'esprima'
import { gsap } from 'gsap'
const variableDeclarations = {}
let i = 0, talkTimeline, output

class VariableDeclaration {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}


class ExpressionStatement {
    constructor(object, property, argument) {
        this.object = object;
        this.property = property;
        this.argument = argument;
    }
}

export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })

    let value = ''
    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            const callee = node.expression.callee
            const argument = node.expression.arguments[0]

            if (argument.type === 'Literal')
                value += argument.value
            else if (argument.type === 'Identifier')
                value += variableDeclarations[argument.name].value

            console.table(new ExpressionStatement(callee.object.name, callee.property.name, value))
            
        }
        else if (node.type === 'VariableDeclaration') {
            for (let declaration of node.declarations) {
                const variableDeclaration = new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value)
                variableDeclarations[variableDeclaration.name] = variableDeclaration
                console.table(variableDeclaration)
            }
        }
        outputConsole(value)
    }
}

function outputConsole(value) {
    if (!talkTimeline?.isActive()) {
        const speechText = output.querySelector('#speech-text')
        const speechBubble = output.querySelector('#speech-bubble')
        speechText.innerHTML = value
        gsap.to(speechBubble, { display: 'inline' })
        gsap.from(speechBubble, { scale: 0, x: -50, y: 150, transformOrigin: 'bottom right' })
        gsap.to(speechText, {display: 'flex'})
        gsap.from(speechText, { scale: 0, x: -15, y: 150, transformOrigin: 'bottom right' })

        talk(value.length * 0.1)
    }
}

function blink() {
    const eyelids = output.querySelectorAll('.eyelid')
    gsap.timeline({ repeat: -1, yoyo: true})
        .to(eyelids, { y: 57, delay: 3, duration: 0.1 })
}

function movePupil() {
    const pupils = output.querySelectorAll('.pupil')
    gsap.timeline({ repeat: -1, yoyo: true})
        .to(pupils, { x: 20, delay: 2, duration: 0.2})

}

function talk(seconds) {
    const smile = output.querySelectorAll('#smile')
    const talk = output.querySelectorAll('.talk')
    const speechText = output.querySelector('#speech-text')
    const speechBubble = output.querySelector('#speech-bubble')
    gsap.set(smile, { display: 'none' })
    talkTimeline = gsap.timeline({ repeat: seconds * 2, onComplete: () => { gsap.set(smile, { display: 'inline' })} })
        .set(talk[0], { display: 'inline'}, 0)
        .set(talk[0], { display: 'none'}, 0.1)
        .set(talk[1], { display: 'inline'}, 0.1)
        .set(talk[1], { display: 'none'}, 0.2)
        .set(talk[2], { display: 'inline'}, 0.2)
        .set(talk[2], { display: 'none'}, 0.3)
        .set(talk[3], { display: 'inline'}, 0.3)
        .set(talk[3], { display: 'none'}, 0.4)

    gsap.to([speechBubble, speechText], { display: 'none', delay: seconds})
}



addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
    blink()
    movePupil()
})
