import { useContext } from 'react'
import { templateSources } from '../appData'
import Context from '../context'

function EditorFooter({ handleRunButtonClick }) {
    const [chapter, setChapter] = useContext(Context)

    const handlePrevButtonClick = () => {
        if (chapter > 1) setChapter(prev => prev - 1)
    }

    const handleNextButtonClick = () => {
        if (chapter < templateSources.length) setChapter(prev => prev + 1)
    }

    return (
        <footer>
            <div id="run-button" className="button" onClick={handleRunButtonClick}>
                Run
            </div>
            <div className="nav-button-container">
                <div id="prev-button" className="button" onClick={handlePrevButtonClick}>
                    Prev
                </div>
                <div id="next-button" className="button" onClick={handleNextButtonClick}>
                    Next
                </div>
            </div>
        </footer>
    )
}

export default EditorFooter
