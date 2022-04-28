import { descriptions } from '../appData'
import { useContext } from 'react'
import Context from '../context'

function DescriptionSection() {
    const [chapter, setChapter] = useContext(Context)

    return <section className="description-section">{descriptions[chapter - 1]}</section>
}

export default DescriptionSection
