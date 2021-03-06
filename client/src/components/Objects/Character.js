import {gsap} from 'gsap'
import {useState, useEffect} from 'react'
import {CharacterContainer, CharacterHP, CharacterImg} from './styles'
import {objectDeclarations} from '../../js/parse'

function isCollide(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width / 2) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width / 2))
    );
}

export default function Character({properties, idleSrc, attackSrc, characters}) {
    const [name, setName] = useState(properties.name)
    const [health, setHealth] = useState(properties.health)
    const [position, setPosition] = useState(0)
    const [speed, setSpeed] = useState(20)
    const [src, setSrc] = useState(idleSrc)

    useEffect(() => {
        gsap.to(`#${name}`, {x: position})
    }, [position])

    useEffect(() => {
        const hp = document.querySelector(`#${name} #hp-fill`)
        gsap.to(hp, {width: `${health}%`})
    }, [health])

    const attack = () => {
        const items = [...characters]
        const self = document.querySelector(`#${name}`)
        for (const character of items) {
            const characterDOM = document.querySelector(`#${character.properties.name}`)
            const hp = characterDOM.querySelector(`#hp-fill`)
            if (character.properties.name !== name && isCollide(self, characterDOM)) {
                const attack = properties.attack
                const defense = character.properties.defense
                const damage = attack > defense ? attack - defense : 0
                const prevHealth = characterDOM.dataset.health
                characterDOM.dataset.health = prevHealth > damage ? prevHealth - damage : 0
                gsap.to(hp, {width: `${characterDOM.dataset.health}%`})
            }
        }
    }

    const handleOnKeyDown = e => {
        if (e.code === 'ArrowRight') {
            gsap.set(`#${name}, #${name} #hp`, {scaleX: 1})
            setPosition(prev => {
                const bound = window.innerWidth / 2 - document.querySelector(`#${name}`).clientWidth
                if (prev > bound - speed) return bound
                else return prev + speed
            })
        } else if (e.code === 'ArrowLeft') {
            gsap.set(`#${name}, #${name} #hp`, {scaleX: -1})
            setPosition(prev => {
                if (prev < speed) return 0
                else return prev - speed
            })
        } else if (e.code === 'Space' && src !== attackSrc) {
            setSrc(attackSrc)
            attack()
        }
    }

    const handleOnKeyUp = e => {
        if (e.code === 'Space') {
            setSrc(idleSrc)
        }
    }

    const handleOnFocus = e => {
        const self = document.querySelector(`#${name}`)
        self.style.zIndex = 1
    }

    const handleOnBlur = e => {
        const self = document.querySelector(`#${name}`)
        self.style.zIndex = 0
    }

    return (
        <CharacterContainer id={name} className="character" data-health={properties.health}>
            <CharacterHP id="hp" />
            <CharacterImg tabIndex="0" onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyDown={handleOnKeyDown} onKeyUp={handleOnKeyUp} src={src} alt={name} />
        </CharacterContainer >
    )
}
