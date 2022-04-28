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

    const outputHandler = () => {
        const items = []

        for (const name in objectDeclarations) {
            if (name.includes('warrior')) {
                items.push({properties: objectDeclarations[name], idleSrc: warriorIdle, attackSrc: warriorAttack})
            } else if (name.includes('wizard')) {
                items.push({properties: objectDeclarations[name], idleSrc: wizardIdle, attackSrc: wizardAttack})
            }
        }

        setCharacters(items)
    }

    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    }, [])

    return (
        <Container>
            {
                characters.map(character => (
                    <Character key={`${character.properties.name}${Date.now()}`} properties={character.properties} idleSrc={character.idleSrc} attackSrc={character.attackSrc} characters={characters} setCharacters={setCharacters} />
                ))
            }
        </Container>
    )
}

export default Objects
