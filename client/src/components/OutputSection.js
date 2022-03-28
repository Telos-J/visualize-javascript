import {useState, useEffect, useContext} from 'react'
import Context from '../context'
import Consolelog from './Consolelog'
import Variables from './Variables'
import Conditionals from './Conditionals'
import Functions from './Functions'
import Arrays from './Arrays'
import Loops from './Loops'
import Objects from './Objects/index'

function OutputSection({setOutputHandler}) {
    const [chapter, setChapter] = useContext(Context)
    let output

    if (chapter === 1) {
        output = <Consolelog setOutputHandler={setOutputHandler} />
    } else if (chapter === 2) {
        output = <Variables setOutputHandler={setOutputHandler} />
    } else if (chapter === 3) {
        output = <Conditionals setOutputHandler={setOutputHandler} />
    } else if (chapter === 4) {
        output = <Functions setOutputHandler={setOutputHandler} />
    } else if (chapter === 5) {
        output = <Arrays setOutputHandler={setOutputHandler} />
    } else if (chapter === 6) {
        output = <Loops setOutputHandler={setOutputHandler} />
    } else if (chapter === 7) {
        output = <Objects setOutputHandler={setOutputHandler} />
    }


    return <section className="output-section">{output}</section>
}

export default OutputSection
