import { useState, useEffect, useContext } from 'react'
import { templateSources } from '../appData'
import Context from '../context'
import Consolelog from './Consolelog'
import Variables from './Variables'

function OutputSection({ setOutputHandler }) {
    const [chapter, setChapter] = useContext(Context)
    const [source, setSource] = useState(`../templates/${templateSources[chapter - 1]}`)
    let output

    useEffect(() => {
        setSource(`../templates/${templateSources[chapter - 1]}`)
    }, [chapter])

    if (chapter === 1) {
        output = <Consolelog setOutputHandler={setOutputHandler} />
    } else if (chapter === 2) {
        output = <Variables setOutputHandler={setOutputHandler} />
    }

    return <section className="output-section">{output}</section>
}

export default OutputSection
