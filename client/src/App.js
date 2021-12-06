import './css/style.scss'
import MonacoEditor from './components/MonacoEditor/index'

function App() {
    return (
        <div className="App">
            <section className="editor-section">
                <header></header>
                <div id="monaco-editor-container">
                    <MonacoEditor />
                </div>
                <footer>
                    <div id="run-button" className="button">
                        Run
                    </div>
                    <div className="nav-button-container">
                        <div id="prev-button" className="button">
                            Prev
                        </div>
                        <div id="next-button" className="button">
                            Next
                        </div>
                    </div>
                </footer>
            </section>
            <section className="description-section">
                <h1>Chapter 1. console.log</h1>
                <p>
                    Computer language is how we communicate with computer. Editor is where we speak
                    to computer and Console is where computer speak to us and it displays important
                    messages, like errors, for developers.
                </p>
                <p>
                    Console.log is a method that print or log what we put in parentheses. Press Run
                    and see how the computer says 'Hello World!'. Play around and change 'Hello
                    World!' to whatever you want!
                </p>
            </section>

            <div id="output" title="output" />
        </div>
    )
}

export default App
