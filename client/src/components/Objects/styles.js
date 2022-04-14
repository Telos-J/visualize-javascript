import styled from "styled-components"
import {ReactComponent as HP} from '../../img/hp.svg'


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../img/gameBackground.jpg");
    background-size: cover;
    background-position: center;
`

export const CharacterContainer = styled.div`
    position: absolute;
    bottom: 22%;
    height: 25%;
    aspect-ratio: 1.14/1;
`

export const CharacterHP = styled(HP)`
    width: 100%;
    height: 15%;
`

export const CharacterImg = styled.img`
    height: 85%;
    transform: translateX(20%);

    &:focus {
        outline: none;
    }
`
