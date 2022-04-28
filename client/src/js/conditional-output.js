import { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements } from './parse'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

let output;
gsap.registerPlugin(MorphSVGPlugin)

function outputConsole() {
    updateClock()

    for (const ifStatement of ifStatements) {
        if (ifStatement.test()) {
            wakeUp()
        }
        else {
            sleep()
        }
        showMessage(ifStatement)
    }
}

function showMessage(ifStatement) {
    const message = output.querySelector('#message')
    message.innerHTML = ifStatement.test() ? ifStatement.consequent : ifStatement.alternate
}

function wakeUp() {
    const student = output.querySelector('#student')
    const leftArm = output.querySelector('#left-arm')
    const rightArm = output.querySelector('#right-arm')
    const leftEye = output.querySelector('#left-eye')
    const rightEye = output.querySelector('#right-eye')
    const zs = output.querySelectorAll('.z')

    gsap.killTweensOf(student)
    gsap.set(zs, { display: 'none' })
    gsap.to(student, { y: -55 })
    gsap.to(leftArm, { rotate: -80, transformOrigin: 'top left' })
    gsap.to(rightArm, { rotate: 80, transformOrigin: 'top right' })
    gsap.to(rightEye, { morphSVG: "M178.5 176.5C178.5 180.09 175.59 183 172 183C168.41 183 165.5 180.09 165.5 176.5C165.5 172.91 168.41 170 172 170C175.59 170 178.5 172.91 178.5 176.5Z" })
    gsap.to(leftEye, { morphSVG: "M217.5 176.5C217.5 180.09 214.59 183 211 183C207.41 183 204.5 180.09 204.5 176.5C204.5 172.91 207.41 170 211 170C214.59 170 217.5 172.91 217.5 176.5Z" })
}

function sleep() {
    const student = output.querySelector('#student')
    const leftArm = output.querySelector('#left-arm')
    const rightArm = output.querySelector('#right-arm')
    const leftEye = output.querySelector('#left-eye')
    const rightEye = output.querySelector('#right-eye')
    const zs = output.querySelectorAll('.z')

    gsap.set(zs, { display: 'inherit' })
    if (!gsap.isTweening(student)) {
        gsap.to(student, {
            y: 0, onComplete: () => {
                gsap.to(student, { y: '+=4', repeat: -1, yoyo: true, duration: 1 })
            }
        })
    }
    gsap.to(leftArm, { rotate: 0, transformOrigin: 'top left' })
    gsap.to(rightArm, { rotate: 0, transformOrigin: 'top right' })
    gsap.to(rightEye, { morphSVG: "M178 176.5C178 179 178 179 171.5 179C165 179 165 179 165 176.5C165 174 165 174 171.5 174C178 174 178 174 178 176.5Z" })
    gsap.to(leftEye, { morphSVG: "M217 176.5C217 179 217 179 210.5 179C204 179 204 179 204 176.5C204 174 204 174 210.5 174C217 174 217 174 217 176.5Z" })
}

function updateClock() {
    const minuteHand = output.querySelector('#minute-hand')
    const hourHand = output.querySelector('#hour-hand')
    const currentTime = variableDeclarations['currentTime'].value

    gsap.to(minuteHand, { rotate: 360 * currentTime, transformOrigin: 'bottom' })
    gsap.to(hourHand, { rotate: 30 * currentTime, transformOrigin: 'bottom' })
}

function animateSleep() {
    const zs = output.querySelectorAll('.z')
    const student = output.querySelector('#student')

    gsap.to(zs, { scale: 1.3, repeat: -1, yoyo: true, stagger: 0.1, transformOrigin: 'center' })
    gsap.to(student, { y: '+=4', repeat: -1, yoyo: true, duration: 1 })
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
    animateSleep()
})

export { outputConsole }
