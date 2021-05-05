function clearOutput() {
    let output = document.querySelector('#output')
    let newOutput = output.cloneNode()
    output.parentNode.replaceChild(newOutput, output)

    return newOutput
}

export function writeOutput(script) {
    let html = `<h1></h1>`

    let output = clearOutput();
    output.contentWindow.document.open();
    output.contentWindow.document.write(`
        ${html}
        <script>
        try {
            ${script}
        } catch (e) {
            console.error(e)
        }
        </script>
    `)
    output.contentWindow.document.close();
}
