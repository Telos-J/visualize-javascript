import { ReactComponent as Cat } from '../../img/cat.svg'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledCat = styled(Cat)`
    position: absolute;
    width: 111%;
`

export const Fish = styled.div`
    display: none;
    position: absolute;
    z-index: 10;
    font-size: 4vw;
    line-height: 4vw;
    transform: translate(-500%, -53%);
`

export const Poop = styled.div`
    display: none;
    position: absolute;
    z-index: 10;
    font-size: 3.5vw;
    line-height: 3.5vw;
    transform: translate(171%, 43%);
`
