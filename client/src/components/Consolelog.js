import { ReactComponent as Computer } from '../img/computer.svg'
import styled from 'styled-components'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { expressionStatements } from '../js/parse'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
`

const StyledComputer = styled(Computer)`
    height: 80%;
`

let talkTimeline

function outputHandler() {
    let value = ''
    for (const expressionStatement of expressionStatements) {
        value += expressionStatement.value + '<br>'
    }

    if (!talkTimeline?.isActive()) {
        const computer = document.querySelector('#computer')
        const speechText = computer.querySelector('#speech-text tspan')
        const speechBubble = computer.querySelector('#speech-bubble')
        speechText.innerHTML = value
        gsap.to(speechBubble, { display: 'inline' })
        gsap.from(speechBubble, {
            scale: 0,
            x: -50,
            y: 150,
            transformOrigin: 'bottom right',
        })
        gsap.from(speechText, { scale: 0, x: -15, y: 150, transformOrigin: 'bottom right' })
        talk(value.length * 0.1)
    }
}

function talk(seconds) {
    const computer = document.querySelector('#computer')
    const smile = computer.querySelectorAll('#smile')
    const talk = computer.querySelectorAll('.talk')
    const speechBubble = computer.querySelector('#speech-bubble')
    gsap.set(smile, { display: 'none' })
    talkTimeline = gsap
        .timeline({
            repeat: seconds * 2,
            onComplete: () => {
                gsap.set(smile, { display: 'inline' })
            },
        })
        .set(talk[0], { display: 'inline' }, 0)
        .set(talk[0], { display: 'none' }, 0.1)
        .set(talk[1], { display: 'inline' }, 0.1)
        .set(talk[1], { display: 'none' }, 0.2)
        .set(talk[2], { display: 'inline' }, 0.2)
        .set(talk[2], { display: 'none' }, 0.3)
        .set(talk[3], { display: 'inline' }, 0.3)
        .set(talk[3], { display: 'none' }, 0.4)

    gsap.to(speechBubble, { display: 'none', delay: seconds })
}

function Consolelog({ setOutputHandler }) {
    useEffect(() => {
        const computer = document.querySelector('#computer')
        const eyelids = computer.querySelectorAll('.eyelid')
        const pupils = computer.querySelectorAll('.pupil')
        gsap.timeline({ repeat: -1, yoyo: true }).to(eyelids, { y: 57, delay: 3, duration: 0.1 })
        gsap.timeline({ repeat: -1, yoyo: true }).to(pupils, { x: 20, delay: 2, duration: 0.2 })
        setOutputHandler(prev => outputHandler)
    }, [])

    return (
        <Container>
            <StyledComputer id="computer" />
        </Container>
    )
}

export default Consolelog
