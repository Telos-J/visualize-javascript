import {gsap} from 'gsap'
import {useState, useEffect} from 'react'
import {CharacterContainer, CharacterHP, CharacterImg} from './styles'

export default function Character({name, idle, attack, onAttack}) {
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
                if (prev < speed) return 0
                else return prev - speed
            })
        } else if (e.code === 'Space') {
            setSrc(attack)
            onAttack()
        }
    }

    const handleOnKeyUp = e => {
        if (e.code === 'Space') {
            setSrc(idle)
        }
    }

    return (
        <CharacterContainer id={name}>
            <CharacterHP />
            <CharacterImg tabIndex="0" onKeyDown={handleOnKeyDown} onKeyUp={handleOnKeyUp} src={src} alt={name} />
        </CharacterContainer>
    )
}
