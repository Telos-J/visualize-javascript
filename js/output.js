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
        output.querySelector('#name').innerHTML = variableDeclarations[name].name
        output.querySelector('#value').innerHTML = variableDeclarations[name].value
    }
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }

