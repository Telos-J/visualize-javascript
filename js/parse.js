import * as esprima from 'esprima'
let variableDeclarations = {}, expressionStatements = []

class VariableDeclaration {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

class ExpressionStatement {
    constructor(object, property, value) {
        this.object = object;
        this.property = property;
        this.value = value;
    }
}

export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    variableDeclarations = {}, expressionStatements = []

    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            const callee = node.expression.callee
            const argument = node.expression.arguments[0]
            const expressionStatement = new ExpressionStatement(callee.object.name, callee.property.name)

            if (argument.type === 'Literal')
                expressionStatement.value = argument.value
            else if (argument.type === 'Identifier')
                expressionStatement.value = variableDeclarations[argument.name].value

            expressionStatements.push(expressionStatement)
            console.table(expressionStatement)
        }
        else if (node.type === 'VariableDeclaration') {
            for (let declaration of node.declarations) {
                const variableDeclaration = new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value)
                variableDeclarations[variableDeclaration.name] = variableDeclaration
                console.table(variableDeclaration)
            }
        }
    }
}

export { expressionStatements }
