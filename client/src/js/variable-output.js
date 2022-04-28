import { variableDeclarations, expressionStatements, assignmentExpressions } from './parse'
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
        output.querySelector('#label text tspan').innerHTML = variableDeclarations[name].name
        output.querySelector('#data text tspan').innerHTML = variableDeclarations[name].value
        if (variableDeclarations[name].type === 'const') {
            output.querySelector('#slider').setAttribute('fill', '#FF8B84')
            output.querySelector('#lid').setAttribute('fill', '#FF5247')
            output.querySelector('#frontwall').setAttribute('fill', '#FF6A61')
        }
        else if (variableDeclarations[name].type === 'let') {
            output.querySelector('#slider').setAttribute('fill', '#90FF7D')
            output.querySelector('#lid').setAttribute('fill', '#0FEA4C')
            output.querySelector('#frontwall').setAttribute('fill', '#75F55F')
        }
    }
    insertData()

    for (const assignmentExpression of assignmentExpressions) {
        if (output.querySelector('#label text tspan').innerHTML === assignmentExpression.name &&
            variableDeclarations[assignmentExpression.name].type === 'let')
            setTimeout(() => {
                updateData(assignmentExpression.value)
            }, 3000)
    }

    for (const expressionStatement of expressionStatements) {
        setTimeout(() => {
            retrieveData()
        }, assignmentExpressions.length ? 8000 : 3000)
    }
}

function insertData() {
    const box = output.querySelector('#box')
    const data = output.querySelector('#data')
    gsap.set(data, { x: 0 })
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(-60%)',
        onComplete: () => {
            box.classList.add('closed')
        }
    })
}

function retrieveData() {
    const box = output.querySelector('#box')
    const data = output.querySelector('#data')
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(0%)',
    })
}



function updateData(value) {
    const box = output.querySelector('#box')
    const data = output.querySelector('#data')
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(0%)',
        onComplete: () => {
            output.querySelector('#data text tspan').innerHTML = value
            insertData()
        }
    })
}

addEventListener('load', () => {
    output = document.querySelector('#output').contentWindow.document
})

export { outputConsole }
