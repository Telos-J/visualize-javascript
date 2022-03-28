import {gsap} from 'gsap'
import wizard from '../../img/wizard.png'
import {useState, useEffect} from 'react'
import {Character} from './styles'

export default function Wizard() {
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)

    useEffect(() => {
        gsap.to('#warrior', {x: position})
    }, [position])

    const handleOnKeyDown = e => {
        if (e.code === 'ArrowRight') {
            setPosition(prev => {
                const bound = window.innerWidth / 2 - document.querySelector('#wizard').clientWidth
                if (prev > bound - speed) return bound
                else return prev + speed
            })
        } else if (e.code === 'ArrowLeft') {
            setPosition(prev => {
                if (prev < speed) return 0
                else return prev - speed
            })
        }
    }

    return <Character id="wizard" key="wizard" tabIndex="0" onKeyDown={handleOnKeyDown} src={wizard} alt="wizard" />
}

