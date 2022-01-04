import { gsap } from 'gsap'
import { variableDeclarations, assignmentExpressions, expressionStatements } from '../../js/parse'

function outputHandler() {
    const output = document.querySelector('#box')
    for (const name in variableDeclarations) {
        output.querySelector('#label text tspan').innerHTML = variableDeclarations[name].name
        output.querySelector('#data text tspan').innerHTML = variableDeclarations[name].value
        if (variableDeclarations[name].type === 'const') {
            output.querySelector('#slider').setAttribute('fill', '#FF8B84')
            output.querySelector('#lid').setAttribute('fill', '#FF5247')
            output.querySelector('#frontwall').setAttribute('fill', '#FF6A61')
        } else if (variableDeclarations[name].type === 'let') {
            output.querySelector('#slider').setAttribute('fill', '#90FF7D')
            output.querySelector('#lid').setAttribute('fill', '#0FEA4C')
            output.querySelector('#frontwall').setAttribute('fill', '#75F55F')
        }
    }
    insertData()

    for (const assignmentExpression of assignmentExpressions) {
        if (
            output.querySelector('#label text tspan').innerHTML === assignmentExpression.name &&
            variableDeclarations[assignmentExpression.name].type === 'let'
        )
            setTimeout(() => {
                updateData(assignmentExpression.value)
            }, 3000)
    }

    for (const expressionStatement of expressionStatements) {
        setTimeout(
            () => {
                retrieveData()
            },
            assignmentExpressions.length ? 8000 : 3000
        )
    }
}

function insertData() {
    const box = document.querySelector('#box')
    const data = document.querySelector('#data')
    gsap.set(data, { x: 0 })
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(-60%)',
        onComplete: () => {
            box.classList.add('closed')
        },
    })
}

function retrieveData() {
    const box = document.querySelector('#box')
    const data = document.querySelector('#data')
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(0%)',
    })
}

function updateData(value) {
    const box = document.querySelector('#box')
    const data = document.querySelector('#data')
    box.classList.remove('closed')

    gsap.to(data, {
        delay: 1,
        transform: 'translateX(0%)',
        onComplete: () => {
            document.querySelector('#data text tspan').innerHTML = value
            insertData()
        },
    })
}

export { outputHandler }
