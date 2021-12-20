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

const chapterNames = ['console-log', 'variables', 'conditionals', 'functions']

const descriptions = [
    <>
        <h1>Chapter 1. console.log</h1>
        <p>
            Computer language is how we communicate with computer. Editor is where we speak to
            computer and Console is where computer speak to us and it displays important messages,
            like errors, for developers.
        </p>
        <p>
            Console.log is a method that print or log what we put in parentheses. Press Run and see
            how the computer says 'Hello World!'. Play around and change 'Hello World!' to whatever
            you want!
        </p>
    </>,
    <>
        <h1>Chapter 2. Variables</h1>
        <p>
            Variables hold reusable data in a program and associate it with a name. There are 2
            types of variables : const and let. Const is a type of variable that you can't change.
            Let is another type of variable that you can update.
        </p>
        <p>
            Red color box represents const variable which is unable to update. Green color box
            represents let variable which is able to update.
        </p>
        <p>
            We can create, update and read variables. You can create variables by writing the
            keyword of the type of variables(let / const) and then the variable name on the left of
            the = sign. Next, put data on the right side of = sign.
        </p>
        <p>
            We can update variables by writing the name of variables on the left of = sign and
            putting the new data on the right side of = sign.
        </p>
        <p>We can read variables with the variable name.</p>
    </>,
    <>
        <h1>Chapter 3. Conditionals</h1>
        <p>
            There are 3 types of conditional statements : if, else and else if. It checks a specific
            conditions performs a task.
        </p>
        <p>There are comparison operators such as &lt;, &gt;, ===, !==. They compare two values.</p>
        <p>If you change current time, it will decide what to do.</p>
    </>,
    <>
        <h1>Chapter 4. Functions</h1>
        <p>
            A function is a code that groups sequence of statements to perform a task. Parameter
            allows you to assign a default value. You can also use return value to return a value
            from a function.
        </p>
        <p>
            First, the fish comes out when you click Run, so you can give food to the cat. Next, the
            cat starts to eat the fish, and the fish will disappear. Then, the cat stands up, and
            returns a piece of poop.
        </p>
        <p>
            First line selects the food that the cat will eat. Lines 3 to 6 defines the function
            that feeds the cat, and returns the poop. Line 7 will call the function that feeds the
            cat.
        </p>
    </>,
]

export { editorValues, templateSources, chapterNames, descriptions }
