import { useEffect } from 'react'
import { Container, StyledWakeup, Message } from './styles'
import { outputHandler, animateSleep } from './outputHandler'

function Conditionals({ setOutputHandler }) {
    useEffect(() => {
        animateSleep()
        setOutputHandler(prev => outputHandler)
    })

    return (
        <Container>
            <Message id="message"></Message>
            <StyledWakeup />
        </Container>
    )
}

export default Conditionals
