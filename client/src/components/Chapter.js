import EditorSection from './EditorSection'
import DescriptionSection from './DescriptionSection'
import OutputSection from './OutputSection'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import Context from '../context'
import { chapterNames } from '../appData'

export default function Chapter() {
    const { chapterName } = useParams()
    const [chapter, setChapter] = useContext(Context)

    useEffect(() => {
        setChapter(prev => chapterNames.indexOf(chapterName) + 1)
    }, [chapterName])

    return (
        <>
            <EditorSection />
            <DescriptionSection />
            <OutputSection />
        </>
    )
}
