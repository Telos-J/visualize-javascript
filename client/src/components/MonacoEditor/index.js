import React, { useState, useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react'
import setTheme, { codecademyTheme } from './themes'
import { snippets } from './codeSnippets'

function MonacoEditor() {
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

    const [defaultValue, setDefaultValue] = useState(snippets[0])

    const monaco = useMonaco()

    useEffect(() => {
        if (monaco) setTheme(monaco, codecademyTheme)
    }, [monaco])

    return <Editor defaultLanguage="javascript" defaultValue={defaultValue} options={options} />
}

export default MonacoEditor
