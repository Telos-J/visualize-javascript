import { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements } from './parse'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

let output;
gsap.registerPlugin(MorphSVGPlugin)

function outputConsole() {
    const fish = output.querySelector('#fish')
    const cat = output.querySelector('#cat')
    const head = cat.querySelector ('#head')
    gsap.set(fish, { display: 'block '})
    gsap.from(fish, { x: -500 })
    //gsap.to(head, { rotate: -48.76, transformOrigin: "60% 100%" });
    gsap.to(head, { rotate: -61.3, x: "-10%" , y: "28%" , transformOrigin: "60% 100%" });
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }

