import {useState, useEffect} from "react"
import {objectDeclarations} from '../../js/parse'
import {Container} from "./styles"
import Character from "./Character"
import warriorIdle from '../../img/warriorIdle.png'
import warriorAttack from '../../img/warriorAttack.png'
import wizardIdle from '../../img/wizardIdle.png'
import wizardAttack from '../../img/wizardAttack.png'



function Objects({setOutputHandler}) {
    const [characters, setCharacters] = useState([])

    const handleAttack = () => {
        console.log(characters)
    }

    const outputHandler = () => {
        setCharacters([])

        for (const name in objectDeclarations) {
            if (name.includes('warrior')) {
                setCharacters(prev => [
                    ...prev,
                    <Character key={name} name={name} idle={warriorIdle} attack={warriorAttack} onAttack={handleAttack} />
                ])
            } else if (name.includes('wizard')) {
                setCharacters(prev => [
                    ...prev,
                    <Character key={name} name={name} idle={wizardIdle} attack={wizardAttack} onAttack={handleAttack} />
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
