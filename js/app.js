require(["vs/editor/editor.main"], main);

function main() {
    let container = document.querySelector('#monaco-editor-container')
    let editor = monaco.editor.create(container, {
        language: 'javascript',
        theme: 'vs-dark',
        fontFamily: 'Monaco',
        scrollBeyondLastLine: false,
        showEvents: true,
        value: `console.log('Hello World!')`,
    });
}
