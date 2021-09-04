import * as esprima from 'esprima'
let variableDeclarations = {}, expressionStatements = [], assignmentExpressions = []

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

class AssignmentExpression {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}


export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    console.log(syntax)
    variableDeclarations = {}, expressionStatements = [], assignmentExpressions = []

    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            if (node.expression.type === 'CallExpression') {
                const callee = node.expression.callee
                const argument = node.expression.arguments[0]
                const expressionStatement = new ExpressionStatement(callee.object.name, callee.property.name)
    
                if (argument.type === 'Literal')
                    expressionStatement.value = argument.value
                else if (argument.type === 'Identifier')
                    expressionStatement.value = variableDeclarations[argument.name].value
    
                expressionStatements.push(expressionStatement)
                console.table(expressionStatement)
            }else if (node.expression.type === 'AssignmentExpression') {
                const assignmentExpression = new AssignmentExpression(node.expression.left.name, node.expression.right.value)
                assignmentExpressions.push(assignmentExpression)
                console.table(assignmentExpression)
            }
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

export { variableDeclarations, expressionStatements, assignmentExpressions }
