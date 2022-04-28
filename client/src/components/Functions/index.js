import { useEffect } from 'react'
import { Container, StyledCat, Fish, Poop } from './styles'
import { outputHandler } from './outputHandler'

function Functions({ setOutputHandler }) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })

    return (
        <Container>
            <Fish id="fish">🐟</Fish>
            <Poop id="poop">💩</Poop>
            <StyledCat />
        </Container>
    )
}

export default Functions
