import './css/style.scss'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Context from './context'
import Chapter from './components/Chapter'

function App() {
    const [chapter, setChapter] = useState(1)

    return (
        <Router>
            <Context.Provider value={[chapter, setChapter]}>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/console-log" />} />
                    <Route path="/:chapterName" element={<Chapter />} />
                </Routes>
            </Context.Provider>
        </Router>
    )
}

export default App
