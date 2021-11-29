import { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements } from './parse'
import { gsap } from 'gsap'
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

let output;
gsap.registerPlugin(MorphSVGPlugin)

function outputConsole() {
    const fish = output.querySelector('#fish')
    const cat = output.querySelector('#cat')
    const head = cat.querySelector ('#head')
    const body = cat.querySelector('#body')
    const tail = cat.querySelector('#tail')
    const frontLegs = cat.querySelector('#front-legs')
    const backLegs = cat.querySelector('#back-legs')
    gsap.set(fish, { display: 'block '})
    gsap.from(fish, { x: -500 })
    //gsap.to(head, { rotate: -48.76, transformOrigin: "60% 100%" });
    gsap.to(head, { rotate: -61.3, x: "-10%" , y: "28%" , transformOrigin: "60% 100%" });
    gsap.to(body, { rotate: -17.4, x: "-7.5%", y: "17%", transformOrigin: "center" });
    gsap.to(tail, { rotate: -16.45, x: "-41%", transformOrigin: "0% 100%"});
    gsap.to(frontLegs, { rotate: 58.38, x: "5%", y: "27%", transformOrigin: "top"});
    gsap.to(backLegs, {rotate: -8.78, x: "-13%", transformOrigin: "top"});
    }


addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }

