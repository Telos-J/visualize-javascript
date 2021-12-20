import { useContext } from 'react'
import { chapterNames } from '../appData'
import Context from '../context'
import { useNavigate } from 'react-router'

function EditorFooter({ handleRunButtonClick }) {
    const [chapter, setChapter] = useContext(Context)
    const navigate = useNavigate()

    const handlePrevButtonClick = () => {
        if (chapterNames[chapter - 2]) navigate('/' + chapterNames[chapter - 2])
    }

    const handleNextButtonClick = () => {
        if (chapterNames[chapter]) navigate('/' + chapterNames[chapter])
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
