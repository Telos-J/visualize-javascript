import { useState, useEffect, useContext } from 'react'
import Context from '../context'
import Consolelog from './Consolelog'
import Variables from './Variables'
import Arrays from './Arrays'

function OutputSection({ setOutputHandler }) {
    const [chapter, setChapter] = useContext(Context)
        let output

    if (chapter === 1) {
        output = <Consolelog setOutputHandler={setOutputHandler} />
    } else if (chapter === 2) {
        output = <Variables setOutputHandler={setOutputHandler} />
    } else if (chapter === 5) {
        output = <Arrays setOutputHandler={setOutputHandler} />
    }

    return <section className="output-section">{output}</section>
}

export default OutputSection
