import { variableDeclarations, expressionStatements, assignmentExpressions } from './parse'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

let output;
gsap.registerPlugin(MorphSVGPlugin)

function outputConsole() {
    const student = output.querySelector('#student')
    const leftArm = output.querySelector('#left-arm')
    const rightArm = output.querySelector('#right-arm')
    const leftEye = output.querySelector('#left-eye')
    const rightEye = output.querySelector('#right-eye')

    gsap.to(student, {y: 60})
    gsap.to(leftArm, {rotate: 90, transformOrigin: 'bottom left'})
    gsap.to(rightArm, {rotate: -90, transformOrigin: 'bottom right'})
    gsap.to(rightEye, {morphSVG: "M178 118.5C178 121 178 121 171.5 121C165 121 165 121 165 118.5C165 116 165 116 171.5 116C178 116 178 116 178 118.5Z"})
    gsap.to(leftEye, {morphSVG: "M217 118.5C217 121 217 121 210.5 121C204 121 204 121 204 118.5C204 116 204 116 210.5 116C217 116 217 116 217 118.5Z"})
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export {outputConsole}