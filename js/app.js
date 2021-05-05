import { parseScript } from './parse.js'
import { writeOutput } from './output.js'

require(["vs/editor/editor.main", 'esprima'], main);

function createEditor(monaco) {
    let container = document.querySelector('#monaco-editor-container')
    return monaco.editor.create(container, {
        language: 'javascript',
        theme: 'vs-dark',
        fontFamily: 'Monaco',
        scrollBeyondLastLine: false,
        showEvents: true,
        automaticLayout: true,
        value: `const foo = 'Hello World!'`,
    });
}

function runContent(editor, esprima) {
    let script = editor.getValue()

    try {
        parseScript(script, esprima)
        writeOutput(script)
    } catch (e) {
        console.error('ParsingError', e)
    }
}

function main(monaco, esprima) {
    let editor = createEditor(monaco)

    editor.onDidChangeModelContent((e) => {
    })

    document.querySelector('#run-button').addEventListener('click', () => {
        runContent(editor, esprima)
    })
}
