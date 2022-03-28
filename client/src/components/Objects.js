import {useState, useEffect} from "react"
import styled from "styled-components"
import warrior from "../img/warrior.png"
import wizard from '../img/wizard.png'
import {gsap} from 'gsap'
import {objectDeclarations} from '../js/parse'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../img/gameBackground.jpg");
    background-size: cover;
    background-position: center;
`

const Character = styled.img`
    position: absolute;
    aspect-ratio: 1/1;
    height: 20%;
    bottom: 22%
`

function Objects({setOutputHandler}) {
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)
    const [characters, setCharacters] = useState([])

    const outputHandler = () => {
        for (const name in objectDeclarations) {
            if (name === 'warrior') {
                setCharacters(prev => [
                    ...prev,
                    <Character id="warrior" key="warrior" tabIndex="0" onKeyDown={handleOnKeyDown} src={warrior} alt="warrior" />
                ])
            } else if (name === 'wizard') {
                setCharacters(prev => [
                    ...prev,
                    <Character id="wizard" key="wizard" tabIndex="0" onKeyDown={handleOnKeyDown} src={wizard} alt="wizard" />
                ])
            }
        }
    }

    useEffect(() => {
        gsap.to('#warrior', {x: position})
    }, [position])

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
