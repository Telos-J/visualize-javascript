require(["vs/editor/editor.main"], main);

function main() {
    let output = document.querySelector('#output').contentWindow.document
    let container = document.querySelector('#monaco-editor-container')
    let editor = monaco.editor.create(container, {
        language: 'javascript',
        theme: 'vs-dark',
        fontFamily: 'Monaco',
        scrollBeyondLastLine: false,
        showEvents: true,
        value: `document.querySelector('h1').innerHTML = 'Hello World!'`,
    });

    editor.onDidChangeModelContent((e) => {
        let html = `<h1></h1>`
        let script = editor.getValue()

        output.open();
        output.write(`${html}<script>${script}</script>`)
        output.close();
    })
}
