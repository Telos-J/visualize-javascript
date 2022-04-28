import { useState } from 'react'
import { editorValues } from '../appData'
import MonacoEditor from './MonacoEditor'
import EditorHeader from './EditorHeader'
import EditorFooter from './EditorFooter'
import { parseScript } from '../js/parse'

function EditorSection({ outputHandler }) {
    const [value, setValue] = useState(editorValues[0])

    const handleRunButtonClick = () => {
        parseScript(value)
        outputHandler()
    }

    return (
        <section className="editor-section">
            <EditorHeader />
            <MonacoEditor value={value} setValue={setValue} />
            <EditorFooter handleRunButtonClick={handleRunButtonClick} />
        </section>
    )
}

export default EditorSection
