import { useEffect } from 'react'
import { Container, StyledBox } from './styles'
import { outputHandler } from './outputHandler'

function Variables({ setOutputHandler }) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })

    return (
        <Container>
            <StyledBox />
        </Container>
    )
}

export default Variables
