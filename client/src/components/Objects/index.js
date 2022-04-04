import {useState, useEffect} from "react"
import {objectDeclarations} from '../../js/parse'
import {Container} from "./styles"
import Character from "./Character"
import warrior from '../../img/warrior.png'
import wizard from '../../img/wizard.png'


function Objects({setOutputHandler}) {
    const [characters, setCharacters] = useState([])

    const outputHandler = () => {
        setCharacters([])

        for (const name in objectDeclarations) {
            if (name.includes('warrior')) {
                setCharacters(prev => [
                    ...prev,
                    <Character key={name} name={name} src={warrior} />
                ])
            } else if (name.includes('wizard')) {
                setCharacters(prev => [
                    ...prev,
                    <Character key={name} name={name} src={wizard} />
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
