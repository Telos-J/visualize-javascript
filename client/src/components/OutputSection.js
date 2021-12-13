import { useState, useEffect, useContext } from 'react'
import { templateSources } from '../appData'
import Context from '../context'

function OutputSection() {
    const [chapter, setChapter] = useContext(Context)
    const [source, setSource] = useState(`../templates/${templateSources[chapter - 1]}`)

    useEffect(() => {
        setSource(`../templates/${templateSources[chapter - 1]}`)
    }, [chapter])

    return <iframe id="output" title="output" src={source} />
}

export default OutputSection
