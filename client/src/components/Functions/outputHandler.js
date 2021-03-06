import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { variableDeclarations, expressionStatements } from '../../js/parse'

gsap.registerPlugin(MotionPathPlugin)

function outputHandler() {
    updateFood()
    console.log(expressionStatements)
    if (expressionStatements.find(e => e.property === 'feedCat')) {
        tossFish()
        setTimeout(lookAtFish, 500)
        setTimeout(catchFish, 1000)
        setTimeout(poop, 4000)
        setTimeout(vanishPoop, 5000)
    }
}

function updateFood() {
    const fish = variableDeclarations['fish']
    document.querySelector('#fish').innerHTML = fish.value
}

function tossFish() {
    const fish = document.querySelector('#fish')
    const path = document.querySelector('#path')

    gsap.set(fish, { display: 'block ' })
    gsap.from(fish, {
        ease: 'power1.in',
        motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 1],
            start: 1,
            end: 0,
        },
    })
}

function poop() {
    const poop = document.querySelector('#poop')
    const poopPath = document.querySelector('#poop-path')

    gsap.set(poop, { display: 'block', opacity: 1 })
    gsap.from(poop, {
        ease: 'power1.in',
        motionPath: {
            path: poopPath,
            align: poopPath,
            alignOrigin: [0.5, 1],
            start: 1,
            end: 0,
        },
    })
}

function vanishPoop() {
    const poop = document.querySelector('#poop')

    gsap.to(poop, { display: 'none', opacity: 0 })
}

function lookAtFish() {
    const cat = document.querySelector('#cat')
    const head = cat.querySelector('#head')

    gsap.to(head, { rotate: -48.76, transformOrigin: '60% 100%' })
}

function catchFish() {
    const cat = document.querySelector('#cat')
    const head = cat.querySelector('#head')
    const body = cat.querySelector('#body')
    gsap.to(head, { rotate: 0, transformOrigin: '60% 100%' })
    const tail = cat.querySelector('#tail')
    const frontLegs = cat.querySelector('#front-legs')
    const backLegs = cat.querySelector('#back-legs')

    const tl = gsap.timeline()
    tl.to(
        head,
        {
            rotate: -61.3,
            x: '-10%',
            y: '28%',
            transformOrigin: '60% 100%',
            onComplete() {
                gsap.to(head, {
                    rotate: '+=6',
                    repeat: 5,
                    yoyo: true,
                    duration: 0.2,
                    onComplete() {
                        const fish = document.querySelector('#fish')
                        gsap.set(fish, { display: 'none' })
                        tl.reverse()
                        gsap.to(head, {
                            rotate: 0,
                            transformOrigin: '60% 100%',
                        })
                    },
                })
            },
        },
        0
    )
    tl.to(body, { rotate: -17.4, x: '-7.5%', y: '17%', transformOrigin: 'center' }, 0)
    tl.to(tail, { rotate: -16.45, x: '-41%', transformOrigin: '0% 100%' }, 0)
    tl.to(frontLegs, { rotate: 58.38, x: '5%', y: '27%', transformOrigin: 'top' }, 0)
    tl.to(backLegs, { rotate: -8.78, x: '-13%', transformOrigin: 'top' }, 0)
}

export { outputHandler }
