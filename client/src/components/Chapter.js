import EditorSection from './EditorSection'
import DescriptionSection from './DescriptionSection'
import OutputSection from './OutputSection'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import Context from '../context'
import { chapterNames } from '../appData'
import { SEARCH_BASE_URL } from '../config'

export default function Chapter() {
    const { chapterName } = useParams()
    const [chapter, setChapter] = useContext(Context)

    useEffect(() => {
        setChapter(prev => chapterNames.indexOf(chapterName) + 1)
    }, [chapterName])

    useEffect(async () => {
        const searchTerm = 'spiderman no way home'
        const endpoint = `${SEARCH_BASE_URL}${searchTerm}`
        const result = await (await fetch(endpoint)).json()
        console.log(result)
    }, [])

    return (
        <>
            <EditorSection />
            <DescriptionSection />
            <OutputSection />
        </>
    )
}
