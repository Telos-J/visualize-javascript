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
    }
    insertData()

    for (const assignmentExpression of assignmentExpressions) {
        if (output.querySelector('#label text tspan').innerHTML === assignmentExpression.name)
        setTimeout(() => {
            updateData(assignmentExpression.value)
      }, 3000)
   }
   
   for (const expressionStatement of expressionStatements) {
    setTimeout(() => {
        retrieveData()
  }, 3000)
}
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