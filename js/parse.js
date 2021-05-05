class VariableDeclaration {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

export function parseScript(script, esprima) {
    console.clear()
    let syntax = esprima.parseScript(script, { loc: true, range: true })
    for (let node of syntax.body) {
        if (node.type === 'VariableDeclaration') {
            for (let declaration of node.declarations) {
                console.table(new VariableDeclaration(node.kind, declaration.id.name, declaration.init.value))
            }
        }
    }
}
