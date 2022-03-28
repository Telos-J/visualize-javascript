import {useState, useEffect} from "react"
import {objectDeclarations} from '../../js/parse'
import {Container} from "./styles"
import Warrior from "./Warrior"
import Wizard from "./Wizard"

function Objects({setOutputHandler}) {
    const [characters, setCharacters] = useState([])

    const outputHandler = () => {
        for (const name in objectDeclarations) {
            if (name === 'warrior') {
                setCharacters(prev => [
                    ...prev,
                    <Warrior key="warrior" />
                ])
            } else if (name === 'wizard') {
                setCharacters(prev => [
                    ...prev,
                    <Wizard key="wizard" />
                ])
            }
        }
    }

    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    }, [])

    return (
        <Container>
            {characters}
        </Container>
    )
}

export default Objects
