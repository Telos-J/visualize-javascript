import '../css/style.scss'
import * as monaco from 'monaco-editor'
import * as esprima from 'esprima'
import { parseScript } from './parse.js'
import { writeOutput } from './output.js'
import './plugins.js'

const container = document.querySelector('#monaco-editor-container')
const runButton = document.querySelector('#run-button')
const editor = monaco.editor.create(container, {
    language: 'javascript',
    theme: 'vs-dark',
    fontSize: '20px',
    scrollBeyondLastLine: false,
    showEvents: true,
    automaticLayout: true,
    value: `console.log('Hello World!')`,
});

editor.onDidChangeModelContent((e) => {
})

function runContent() {
    let script = editor.getValue()

    try {
        parseScript(script)
        // writeOutput(script)
    } catch (e) {
        console.error('ParsingError', e)
    }
}

runButton.addEventListener('click', runContent)
