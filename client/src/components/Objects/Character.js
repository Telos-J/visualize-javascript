import {gsap} from 'gsap'
import {useState, useEffect} from 'react'
import {StyledImg} from './styles'

export default function Character({name, src}) {
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)

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
                if (prev < speed) return 0
                else return prev - speed
            })
        }
    }

    return <StyledImg id={name} tabIndex="0" onKeyDown={handleOnKeyDown} src={src} alt={name} />
}


