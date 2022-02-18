import { ReactComponent as Cashier } from '../img/cashier.svg'
import styled from "styled-components";
import { useEffect } from 'react';
import { variableDeclarations } from '../js/parse';

const StyledCashier = styled(Cashier)`
    width: 100%;
    height: 100%;`

function outputHandler() {
    const groceryItems = document.querySelectorAll('.grocery-item')
    console.log(groceryItems)
    for (const i in variableDeclarations.items?.value) {
        groceryItems[i].querySelector('tspan').innerHTML = variableDeclarations.items.value[i]
    }
}



function Loops({setOutputHandler}) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })
    return <StyledCashier />
}

export default Loops