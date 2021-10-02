import '../css/style.scss'
import * as monaco from 'monaco-editor'
import { parseScript } from './parse'
import { outputConsole } from './variable-output'
import './plugins.js'

const container = document.querySelector('#monaco-editor-container')
const runButton = document.querySelector('#run-button')
const prevButton = document.querySelector('#prev-button')
const nextButton = document.querySelector('#next-button')

monaco.editor.defineTheme('myTheme', {
    base: 'vs-dark',
    inherit: true,
    rules: [{ background: '211e2f' }],
    colors: {
        'editor.background': '#211e2f',
    }
});
monaco.editor.setTheme('myTheme');

const editor = monaco.editor.create(container, {
    language: 'javascript',
    theme: 'myTheme',
    fontSize: '20px',
    scrollBeyondLastLine: false,
    showEvents: true,
    automaticLayout: true,
    value: `if () {
}`,
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
prevButton.addEventListener('click', () => location.href = '/variable.html')

