const editorValues = [
    `console.log('Hello World!')`,
    `let animal = 'rabbit'`,
    `const currentTime = 8
const wakeupTime = 9

if (currentTime > wakeupTime) {
    console.log('Time to wake up!')
} else {
    console.log('I can sleep more :)')
}`,
    `const fish = '🐟'

function feedCat(food) {
    console.log(\`Cat ate \${food}\`)
    return '💩'
}
feedCat(fish)`,
]

const templateSources = [
    'console-log.html',
    'variable-output.html',
    'conditional-output.html',
    'function-output.html',
]

export { editorValues, templateSources }
