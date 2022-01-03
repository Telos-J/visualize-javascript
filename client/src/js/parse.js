import * as esprima from 'esprima'

let variableDeclarations = {},
    expressionStatements = [],
    assignmentExpressions = [],
    ifStatements = []

class VariableDeclaration {
    constructor(type, name, value) {
        this.type = type
        this.name = name
        this.value = value
    }
}

class ExpressionStatement {
    constructor(object, property, value) {
        this.object = object
        this.property = property
        this.value = value
    }
}

class AssignmentExpression {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}

class IfStatement {
    constructor(leftValue, rightValue, operator, consequent, alternate) {
        this.leftValue = leftValue
        this.rightValue = rightValue
        this.operator = operator
        this.consequent = consequent
        this.alternate = alternate
    }

    test() {
        if (this.operator === '<') return this.leftValue < this.rightValue
        else if (this.operator === '>') return this.leftValue > this.rightValue
        else if (this.operator === '<=') return this.leftValue <= this.rightValue
        else if (this.operator === '>=') return this.leftValue >= this.rightValue
        else if (this.operator === '===') return this.leftValue === this.rightValue
        else if (this.operator === '!==') return this.leftValue !== this.rightValue
    }
}

function reset() {
    variableDeclarations = {}
    expressionStatements = []
    assignmentExpressions = []
    ifStatements = []
}

function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    console.log(syntax)
    reset()
    deconstructSyntax(syntax)
}

function deconstructSyntax(syntax) {
    for (let node of syntax.body) {
        if (node.type === 'ExpressionStatement') {
            return processExpression(node.expression)
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
        const expressionStatement = new ExpressionStatement(
            callee.object.name,
            callee.property.name
        )

        if (argument.type === 'Literal') expressionStatement.value = argument.value
        else if (argument.type === 'Identifier')
            expressionStatement.value = variableDeclarations[argument.name].value

        expressionStatements.push(expressionStatement)
        console.table(expressionStatement)
        return expressionStatement
    } else if (expression.type === 'AssignmentExpression') {
        const assignmentExpression = new AssignmentExpression(
            expression.left.name,
            expression.right.value
        )
        assignmentExpressions.push(assignmentExpression)
        console.table(assignmentExpression)
        return assignmentExpression
    }
}

function getArrayValues(elements) {
    const arrayValues = []
    for (const element of elements) {
        arrayValues.push(element.value)
    }

    return arrayValues
}

function processDeclarations(node) {
    for (let declaration of node.declarations) {
        let value
        if (declaration.init.type === 'Literal') value = declaration.init.value
        else if (declaration.init.type === 'ArrayExpression') value = getArrayValues(declaration.init.elements)
        
        const variableDeclaration = new VariableDeclaration(
            node.kind,
            declaration.id.name,
            value
        )
        variableDeclarations[variableDeclaration.name] = variableDeclaration
        console.table(variableDeclaration)
    }
}

function processIfStatement(node) {
    const leftValue = getValue(node.test.left)
    const rightValue = getValue(node.test.right)
    const operator = node.test.operator
    const consequent = deconstructSyntax(node.consequent).value
    const alternate = deconstructSyntax(node.alternate).value

    const ifStatement = new IfStatement(leftValue, rightValue, operator, consequent, alternate)
    ifStatements.push(ifStatement)
    console.table(ifStatement)
}

function getValue(node) {
    if (node.type === 'Identifier') return variableDeclarations[node.name].value
    else if (node.type === 'Literal') return node.value
}

export {
    parseScript,
    variableDeclarations,
    expressionStatements,
    assignmentExpressions,
    ifStatements,
}
