import './css/style.scss'
import { useState } from 'react'
import EditorSection from './components/EditorSection'
import DescriptionSection from './components/DescriptionSection'
import OutputSection from './components/OutputSection'
import Context from './context'

function App() {
    const [chapter, setChapter] = useState(1)

    return (
        <div className="App">
            <Context.Provider value={[chapter, setChapter]}>
                <EditorSection />
                <DescriptionSection />
                <OutputSection />
            </Context.Provider>
        </div>
    )
}

export default App
