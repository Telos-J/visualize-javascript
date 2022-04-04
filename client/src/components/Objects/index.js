import {useState, useEffect} from "react"
import {objectDeclarations} from '../../js/parse'
import {Container} from "./styles"
import Warrior from "./Warrior"
import Wizard from "./Wizard"

function Objects({setOutputHandler}) {
    const [characters, setCharacters] = useState([])

    const outputHandler = () => {
        setCharacters([])

        for (const name in objectDeclarations) {
            if (name.includes('warrior')) {
                setCharacters(prev => [
                    ...prev,
                    <Warrior name={name} />
                ])
            } else if (name.includes('wizard')) {
                setCharacters(prev => [
                    ...prev,
                    <Wizard name={name} />
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
