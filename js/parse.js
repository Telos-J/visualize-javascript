import * as esprima from 'esprima'
import { gsap } from 'gsap'
const variableDeclarations = {}
let i = 0, mouthAnimation, output, mouths

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

    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            const callee = node.expression.callee
            const argument = node.expression.arguments[0]
            let value

            if (argument.type === 'Literal')
                value = argument.value
            else if (argument.type === 'Identifier')
                value = variableDeclarations[argument.name].value

            console.table(new ExpressionStatement(callee.object.name, callee.property.name, value))
            outputConsole(value)
        }
        else if (node.type === 'VariableDeclaration') {
            for (let declaration of node.declarations) {
                const variableDeclaration = new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value)
                variableDeclarations[variableDeclaration.name] = variableDeclaration
                console.table(variableDeclaration)
            }
        }
    }
}

function outputConsole(value) {
    if (!mouthAnimation) {
        output.querySelector('#speech-text').innerHTML = value
        const speechBubble = output.querySelector('#speech-bubble')
        gsap.from(speechBubble, { scale: 0, x: 50, y: 150, transformOrigin: 'bottom right' })

        startMouthAnimation()
        setTimeout(stopMouthAnimation, value.length * 100)
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

function nextMouth() {
    for (let j = 0; j < mouths.length; j++) {
        if (i === j) mouths[i].style.display = 'inline'
        else mouths[j].style.display = 'none'
    }

    i++
    if (i === mouths.length) i = 0
}

function startMouthAnimation() {
    mouthAnimation = setInterval(nextMouth, 100)
}

function stopMouthAnimation() {
    clearInterval(mouthAnimation)
    mouthAnimation = undefined
}



addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
    mouths = output.querySelectorAll('.mouth')
    nextMouth()
    blink()
    movePupil()
})
