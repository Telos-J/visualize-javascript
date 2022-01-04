import { ReactComponent as Box } from '../../img/box.svg'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

export const StyledBox = styled(Box)`
    width: 50%;

    #slider {
        transition: transform 1s;
    }

    &.closed #slider {
        transform: translateY(42.5%);
    }

    #name {
        position: absolute;
        bottom: 2rem;
    }

    #value {
        position: absolute;
        bottom: 15rem;
    }
`
