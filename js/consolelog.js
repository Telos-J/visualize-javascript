import '../css/style.scss'
import * as monaco from 'monaco-editor'
import { parseScript } from './parse'
import { outputConsole } from './consolelog-output'
import './plugins.js'

const container = document.querySelector('#monaco-editor-container')
const runButton = document.querySelector('#run-button')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')
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
        outputConsole()
    } catch (e) {
        console.error('ParsingError', e)
    }
}

runButton.addEventListener('click', runContent)
nextButton.addEventListener('click', () => location.href = '/variable.html')
