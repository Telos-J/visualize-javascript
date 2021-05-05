require(["vs/editor/editor.main"], main);

function refresh() {
    let output = document.querySelector('#output')
    let newOutput = output.cloneNode()
    output.parentNode.replaceChild(newOutput, output)

    return newOutput
}

function main() {
    let container = document.querySelector('#monaco-editor-container')
    let editor = monaco.editor.create(container, {
        language: 'javascript',
        theme: 'vs-dark',
        fontFamily: 'Monaco',
        scrollBeyondLastLine: false,
        showEvents: true,
        value: `const pi = Math.PI`,
    });

    editor.onDidChangeModelContent((e) => {
        let html = `<h1></h1>`
        let script = editor.getValue()
        let output = refresh()

        output.contentWindow.document.open();
        output.contentWindow.document.write(`
            ${html}<script>${script}</script>
            <script>console.log(pi)</script>
        `)
        output.contentWindow.document.close();
    })
}
