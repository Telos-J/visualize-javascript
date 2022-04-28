import { useEffect } from 'react'
import { Container, StyledComputer } from './styles'
import { outputHandler, blink } from './outputHandler'

function Consolelog({ setOutputHandler }) {
    useEffect(() => {
        blink()
        setOutputHandler(prev => outputHandler)
    }, [])

    return (
        <Container>
            <StyledComputer id="computer" />
        </Container>
    )
}

export default Consolelog
