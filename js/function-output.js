import { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements } from './parse'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

let output;
gsap.registerPlugin(MorphSVGPlugin)

function outputConsole() {
    const fish = output.querySelector('#fish')
    gsap.set(fish, { display: 'block '})
    gsap.from(fish, { x: -500 })
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }

