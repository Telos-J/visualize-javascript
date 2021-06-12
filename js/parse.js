import * as esprima from 'esprima'

class VariableDeclaration {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

class ExpressionStatement {
    constructor(object, property, argument) {
        this.object = object;
        this.property = property;
        this.argument = argument;
    }
}

export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })

    for (let node of syntax.body){
        if (node.type === 'ExpressionStatement') {
            const callee = node.expression.callee
            const value =  node.expression.arguments[0].value
            console.table(new ExpressionStatement(callee.object.name, callee.property.name, value))
            outputConsole(value)
        }
        else if (node.type === 'VariableDeclaration') {
            for (let declaration of node.declarations) {
                console.table(new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value))
            }
        }
    }
}

function outputConsole(value) {
    const output = document.querySelector('#output').contentWindow.document
    output.body.querySelector('#speech-text').innerHTML = value
}