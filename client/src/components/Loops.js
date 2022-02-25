import {ReactComponent as Cashier} from '../img/cashier.svg'
import {gsap} from 'gsap'
import styled from "styled-components";
import {useEffect} from 'react';
import {variableDeclarations} from '../js/parse';

const StyledCashier = styled(Cashier)`
    width: 100%;
    height: 100%;`

function outputHandler() {
    const groceryItems = document.querySelectorAll('.grocery-item')
    for (const i in variableDeclarations.items?.value) {
        const groceryItem = groceryItems[i].querySelector('tspan')
        groceryItem.innerHTML = variableDeclarations.items.value[i]
        gsap.to(groceryItems[i], {y: -100})
    }
}

function Loops({setOutputHandler}) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })
    return <StyledCashier />
}

export default Loops
