import { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements } from './parse'
import { gsap } from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

let output;
gsap.registerPlugin(MotionPathPlugin)

function outputConsole() {
    updateFood();
    tossFish();
    setTimeout(lookAtFish, 500);
    setTimeout(catchFish, 1000);
}

function updateFood() {
    const fish = variableDeclarations['fish'];
    output.querySelector("#fish").innerHTML = fish.value;
}

function tossFish() {
    const fish = output.querySelector('#fish');
    const path = output.querySelector('#path');

    gsap.set(fish, { display: 'block '});
    gsap.from(fish, {ease: "power1.in", motionPath: { path, align: path, alignOrigin: [0.5,1], start: 1, end: 0 } });
}

function lookAtFish() {
    const cat = output.querySelector('#cat');
    const head = cat.querySelector ('#head');

    gsap.to(head, {rotate: -48.76, transformOrigin: "60% 100%" });
}

function catchFish() {
    const cat = output.querySelector('#cat');
    const head = cat.querySelector ('#head');
    const body = cat.querySelector('#body');
    const tail = cat.querySelector('#tail');
    const frontLegs = cat.querySelector('#front-legs');
    const backLegs = cat.querySelector('#back-legs');

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

