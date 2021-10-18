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

    gsap.to(student, {y: -55})
    gsap.to(leftArm, {rotate: -80, transformOrigin: 'top left'})
    gsap.to(rightArm, {rotate: 80, transformOrigin: 'top right'})
    gsap.to(rightEye, {morphSVG: "M178.5 176.5C178.5 180.09 175.59 183 172 183C168.41 183 165.5 180.09 165.5 176.5C165.5 172.91 168.41 170 172 170C175.59 170 178.5 172.91 178.5 176.5Z"})
    gsap.to(leftEye, {morphSVG: "M217.5 176.5C217.5 180.09 214.59 183 211 183C207.41 183 204.5 180.09 204.5 176.5C204.5 172.91 207.41 170 211 170C214.59 170 217.5 172.91 217.5 176.5Z"})
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export {outputConsole}