import {ReactComponent as Cashier} from '../img/cashier.svg'
import {gsap} from 'gsap'
import styled from "styled-components";
import {useEffect} from 'react';
import {variableDeclarations, forOfStatements} from '../js/parse';

const StyledCashier = styled(Cashier)`
    width: 100%;
    height: 100%;`

function outputHandler() {
    const groceriesContainer = document.querySelector('#groceries')
    const groceryItemBase = document.querySelector('.grocery-item')
    groceriesContainer.innerHTML = ''

    const groceries = variableDeclarations.items?.value
    for (const i in groceries) {
        const newGroceryItem = groceryItemBase.cloneNode()
        newGroceryItem.innerHTML = groceries[i]
        groceriesContainer.appendChild(newGroceryItem)

        if (groceries.length > 1)
            gsap.set(newGroceryItem, {attr: {x: 510 + (240) / (groceries.length - 1) * i, y: 820.4}})
        
        if (forOfStatements[0]?.array === 'items') {
            gsap.to(newGroceryItem, {attr: {x: 750, y: 600}, delay: 0.5 * i})
            gsap.to(newGroceryItem, {attr: {x: 1250}, delay: 0.5 * i + 0.5, duration: 1.7, ease: 'none'})
        }
    }
}

function Loops({setOutputHandler}) {
    useEffect(() => {
        setOutputHandler(prev => outputHandler)
    })
    return <StyledCashier />
}

export default Loops
