import {gsap} from 'gsap'
import {useState, useEffect} from 'react'
import {StyledImg} from './styles'

export default function Character({name, idle, attack}) {
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)
    const [src, setSrc] = useState(idle)

    useEffect(() => {
        gsap.to(`#${name}`, {x: position})
    }, [position])

    const handleOnKeyDown = e => {
        if (e.code === 'ArrowRight') {
            gsap.set(`#${name}`, {scaleX: 1})
            setPosition(prev => {
                const bound = window.innerWidth / 2 - document.querySelector(`#${name}`).clientWidth
                if (prev > bound - speed) return bound
                else return prev + speed
            })
        } else if (e.code === 'ArrowLeft') {
            gsap.set(`#${name}`, {scaleX: -1})
            setPosition(prev => {
                const bound = document.querySelector(`#${name}`).clientWidth * 0.4
                if (prev < bound) return bound
                else return prev - speed
            })
        } else if (e.code === 'Space') {
            setSrc (attack)
        }
    }

    const handleOnKeyUp = e => {
        if (e.code === 'Space') {
            setSrc(idle)
        }
    }

    return <StyledImg id={name} tabIndex="0" onKeyDown={handleOnKeyDown} onKeyUp={handleOnKeyUp} src={src} alt={name} />
}


