import EditorSection from './EditorSection'
import DescriptionSection from './DescriptionSection'
import OutputSection from './OutputSection'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Context from '../context'
import { chapterNames } from '../appData'
import { SEARCH_BASE_URL, POSTER_SIZE, IMAGE_BASE_URL } from '../config'

export default function Chapter() {
    const { chapterName } = useParams()
    const [chapter, setChapter] = useContext(Context)
    const [outputHandler, setOutputHandler] = useState()

    useEffect(() => {
        setChapter(prev => chapterNames.indexOf(chapterName) + 1)
    }, [chapterName])

    useEffect(async () => {
        //const output = document.querySelector('#output').contentWindow.document
        //const image = new Image()
        //const searchTerm = 'spiderman homecoming'
        //const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
        //const result = await (await fetch(endpoint)).json()
        //const posterPath = result.results[0].poster_path
        //console.log(result.results[0].poster_path)
        //image.src = `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
        //const container = output.querySelector('#container')
        //container.appendChild(image)
    }, [])

    return (
        <>
            <EditorSection outputHandler={outputHandler} />
            <DescriptionSection />
            <OutputSection setOutputHandler={setOutputHandler} />
        </>
    )
}
