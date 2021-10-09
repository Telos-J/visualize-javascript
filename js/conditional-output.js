import { variableDeclarations, expressionStatements, assignmentExpressions } from './parse'
import { gsap } from 'gsap'
let output;

function outputConsole() {
    const student = output.querySelector('#student')
    const leftArm = output.querySelector('#left-arm')
    const rightArm = output.querySelector('#right-arm')
    gsap.to(student, {y: 60})
    gsap.to(leftArm, {rotate: 90, transformOrigin: 'bottom left'})
    gsap.to(rightArm, {rotate: -90, transformOrigin: 'bottom right'})
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export {outputConsole}