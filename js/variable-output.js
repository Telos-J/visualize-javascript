import { variableDeclarations } from './parse'
import { gsap } from 'gsap'
let output

function clearOutput() {
    let output = document.querySelector('#output')
    let newOutput = output.cloneNode()
    output.parentNode.replaceChild(newOutput, output)

    return newOutput
}

function writeOutput(script) {
    let html = `<h1></h1>`

    let output = clearOutput();
    output.contentWindow.document.open();
    output.contentWindow.document.write(`
        ${html}
        <script>
        try {
            ${script}
        } catch (e) {
            console.error(e)
        }
        </script>
    `)
    output.contentWindow.document.close();
}

function outputConsole() {
    for (const name in variableDeclarations) {
        console.log(variableDeclarations[name])
        output.querySelector('#label text tspan').innerHTML = variableDeclarations[name].name
        output.querySelector('#data text tspan').innerHTML = variableDeclarations[name].value
    }
    insertData()
}

function insertData() {
    const box = output.querySelector('#box')
    const data = output.querySelector('#data')
    gsap.set(data, {x: 0})
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(-60%)', 
        onComplete: () => {
            box.classList.add('closed')
        }
    })
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }

