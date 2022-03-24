import {useState, useEffect} from "react"
import styled from "styled-components"
import warrior from "../img/warrior.png"
import { gsap } from 'gsap'

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../img/gameBackground.jpg");
    background-size: cover;
    background-position: center;
`

const Warrior = styled.img`
    position: absolute;
    aspect-ratio: 1/1;
    height: 20%;
    bottom: 22%
`


function Objects({setOutputHandler}) {
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)

    const handleOnKeyDown = e => {
        if (e.code === 'ArrowRight') {
            setPosition(prev => prev + speed)
        } else if (e.code === 'ArrowLeft') {
            setPosition(prev => prev - speed)
        }
    }

    useEffect(() => { 
        gsap.to('#warrior', {x: position})
    }, [position])

    return (
        <Container>
            <Warrior id="warrior" tabIndex="0" onKeyDown={handleOnKeyDown} src={warrior} alt="warrior" />
        </Container>
    )
}

export default Objects
