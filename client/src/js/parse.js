import * as esprima from 'esprima'

let variableDeclarations = {},
    expressionStatements = [],
    assignmentExpressions = [],
    ifStatements = [],
    functionDeclarations = {},
    forOfStatements = [] ,
    forInStatements = [],
    objectDeclarations = {}

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
    constructor(name, property, value) {
        this.name = name
        this.property = property
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

class FunctionDeclaration {
    constructor(name, params, body, returnData) {
        this.name = name
        this.params = params
        this.body = body
        this.returnData = returnData
    }
}

class ForOfStatement {
    constructor(array) {
        this.array = array
    }
}

class ForInStatement {
    constructor(array1, array2) {
        this.array1 = array1
        this.array2 = array2
    }
}

class ObjectDeclarations {
    constructor(name) {
        this.name = name
    }
}

export function parseScript(script) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    console.log(syntax)
    variableDeclarations = {}
    expressionStatements = []
    assignmentExpressions = []
    ifStatements = []
    functionDeclarations = {}
    forOfStatements = []
    forInStatements = []
    objectDeclarations = {}
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
        } else if (node.type === 'FunctionDeclaration') {
            processFunctionDeclaration(node)
        } else if (node.type === 'ForOfStatement') {
            processForOfStatement(node)
        } else if (node.type === 'ForInStatement') {
            processForInStatement(node)
        }
    }
}

function processExpression(expression) {
    if (expression.type === 'CallExpression') {
        const callee = expression.callee
        const argument = expression.arguments[0]
        const expressionStatement = new ExpressionStatement()

        if (callee.type === 'MemberExpression') {
            expressionStatement.object = callee.object.name
            expressionStatement.property = callee.property.name
        } else if (callee.type === 'Identifier') {
            expressionStatement.property = callee.name
        }

        if (argument?.type === 'Literal') expressionStatement.value = argument.value
        else if (argument?.type === 'Identifier')
            expressionStatement.value = variableDeclarations[argument.name].value

        expressionStatements.push(expressionStatement)
        console.table(expressionStatement)
        return expressionStatement
    } else if (expression.type === 'AssignmentExpression') {
        const assignmentExpression = new AssignmentExpression(null, null, expression.right.value)
        if (expression.left.type === 'Identifier') {
            assignmentExpression.name = expression.left.name
        } else if (expression.left.type === 'MemberExpression') {
            assignmentExpression.name = expression.left.object.name
            assignmentExpression.property = expression.left.property.value
        }
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
        if (declaration.init.type === 'Literal') {
            value = declaration.init.value
        } else if (declaration.init.type === 'ArrayExpression') {
            value = getArrayValues(declaration.init.elements)
        } else if (declaration.init.type === 'ObjectExpression') {
            const objectDeclaration = new ObjectDeclarations(declaration.id.name)
            for (const property of declaration.init.properties) {
                objectDeclaration[property.key.name] = property.value.value
            }
            objectDeclarations[objectDeclaration.name] = objectDeclaration
            console.table(objectDeclaration)
            return
        }

        const variableDeclaration = new VariableDeclaration(node.kind, declaration.id.name, value)
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

function processFunctionDeclaration(node) {
    let body = node.body.body
    let returnData
    if (body[body.length - 1].type === 'ReturnStatement') {
        returnData = body[body.length - 1]
        body = body.slice(0, -1)
    }

    const functionDeclaration = new FunctionDeclaration(
        node.id.name,
        node.params.map(params => params.name),
        body,
        getValue(returnData.argument)
    )
    functionDeclarations[functionDeclaration.name] = (functionDeclaration)
    console.table(functionDeclaration)
}

function getValue(node) {
    if (node.type === 'Identifier') return variableDeclarations[node.name].value
    else if (node.type === 'Literal') return node.value
}

function processForOfStatement(node) {
    const forOfStatement = new ForOfStatement(node.right.name)
    forOfStatements.push(forOfStatement)
    console.table(forOfStatement)
}

function processForInStatement(node) {
    const expression = node.body.body[0].expression
    const forInStatement = new ForInStatement(expression.arguments[0].object.name, expression.arguments[1].object.name)
    forInStatements.push(forInStatement)
    console.table(forInStatement)
}

export { variableDeclarations, expressionStatements, assignmentExpressions, ifStatements, functionDeclarations, forOfStatements, forInStatements, objectDeclarations }
