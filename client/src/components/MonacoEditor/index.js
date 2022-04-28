import React, { useState, useEffect, useContext } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import setTheme, { codecademyTheme } from './themes'
import { editorValues } from '../../appData'
import Context from '../../context'

function MonacoEditor({ value, setValue }) {
    const monaco = useMonaco()
    const [chapter, setChapter] = useContext(Context)
    const [options, setOptions] = useState({
        fontSize: '20px',
        scrollBeyondLastLine: false,
        showEvents: true,
        automaticLayout: true,
        overviewRulerLanes: 0,
        minimap: {
            enabled: false,
        },
    })

    const handleEditorChange = newValue => {
        setValue(prev => newValue)
    }

    useEffect(() => {
        if (monaco) setTheme(monaco, codecademyTheme)
    }, [monaco])

    useEffect(() => {
        setValue(editorValues[chapter - 1])
    }, [chapter])

    return (
        <div id="monaco-editor-container">
            <Editor
                defaultLanguage="javascript"
                value={value}
                options={options}
                theme={codecademyTheme.name}
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default MonacoEditor
