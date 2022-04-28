import { ReactComponent as Wakeup } from '../../img/wakeup.svg'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`

export const StyledWakeup = styled(Wakeup)`
    width: 80%;
`

export const Message = styled.div`
    text-align: center;
    margin-bottom: 15%;
    font-family: 'Roboto';
    font-size: 2rem;
`
