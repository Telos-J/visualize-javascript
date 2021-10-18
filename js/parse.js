import * as esprima from 'esprima'
let variableDeclarations = {}, expressionStatements = [], assignmentExpressions = [], ifStatements = []

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

class IfStatement {
    constructor(test, consequent, alternate) {
        this.test = test
        this.consequent = consequent
        this.alternate = alternate
    }
}


export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    console.log(syntax)
    variableDeclarations = {}, expressionStatements = [], assignmentExpressions = []
    deconstructSyntax(syntax)
}

function deconstructSyntax(syntax) {
    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            processExpression(node.expression)
        } else if (node.type === 'VariableDeclaration') {
            processDeclarations(node)
        } else if (node.type === 'IfStatement') {
            processIfStatement(node)
        } 
    }
}

function processExpression(expression) {
    if (expression.type === 'CallExpression') {
        const callee = expression.callee
        const argument = expression.arguments[0]
        const expressionStatement = new ExpressionStatement(callee.object.name, callee.property.name)

        if (argument.type === 'Literal')
            expressionStatement.value = argument.value
        else if (argument.type === 'Identifier')
            expressionStatement.value = variableDeclarations[argument.name].value

        expressionStatements.push(expressionStatement)
        console.table(expressionStatement)
    } else if (expression.type === 'AssignmentExpression') {
        const assignmentExpression = new AssignmentExpression(expression.left.name, expression.right.value)
        assignmentExpressions.push(assignmentExpression)
        console.table(assignmentExpression)
    }
}
    

function processDeclarations(node) {
    for (let declaration of node.declarations) {
        const variableDeclaration = new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value)
        variableDeclarations[variableDeclaration.name] = variableDeclaration
        console.table(variableDeclaration)
    }
}

function processIfStatement(node) {
    deconstructSyntax(node.consequent)
    deconstructSyntax(node.alternate)

    const leftValue = variableDeclarations[node.test.left.name].value
    const rightValue = variableDeclarations[node.test.right.name].value
    const test = leftValue > rightValue 
    
    const ifStatement = new IfStatement(test)
    ifStatements.push(ifStatement)
    console.table(ifStatement)
    }


export { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements }