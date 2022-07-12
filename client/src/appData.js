const editorValues = [
    `console.log('Hello World!')`,
    `const animal = 'rabbit'`,
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
    'const movies = []',
    `const items = ['🍕', '🍿', '🧇']
for (const item of items) {
    checkout(item)
}`,
    `const warrior = {
    health: 100,
    attack: 80,
    defense: 60
}`
]

const chapterNames = ['console-log', 'variables', 'conditionals', 'functions', 'arrays', 'loops', 'objects']

const descriptions = [
    <>
        <h1>Chapter 1. console.log</h1>
        <p>
            In this chapter, we look at programming in three parts: the computer language, the code
            editor, and the console.
        </p>
        <p>
            Computer language is a language we use to communicate with the
            computer. The code which we write using a code editor allows us to speak to the computer
            and tell it what to do. The console can be thought of as the tool which the computer uses
            to speak to us and display important messages, like errors, to developers.
        </p>
        <p>
            <code>console.log</code> is a method that prints out whatever we put in the parentheses to the console.
            Press Run and see how the computer says 'Hello World!'. Play around and change 'Hello World!'
            to whatever you want.
        </p>
    </>,
    <>
        <h1>Chapter 2. Variables</h1>
        <p>
            Generally speaking, there are two things that the computer is told to do: 1. Store data and 2. Process the data.
            In this chapter we will look at how the computer uses variables to store data.
        </p>
        <p>
            Variables can be thought of as containers used to store reusable data and associate it with a name.
            Here, we will look at two types of variables: <code>const</code> and <code>let</code>. <code>const</code> is a type
            of variable that you cannot change. <code>let</code> is another type of variable that you can update.
        </p>
        <p>
            A red color box represents a <code>const</code> variable and a green color box represents a <code>let</code> variable.
            Run the code and try changing the variable type to a <code>let</code>.
        </p>
        <p>
            We can create, update and read variables. You can create variables by specifying the
            type of variable then the variable name on the left of the = sign, and the data to store on the right of the = sign.
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
    <>
        <h1>Chapter 5. Arrays</h1>
        <p>
            Arrays are lists that store data. They have .push() and .pop() methods, which add and remove items. You can add items with .push(), and item in () will be added on the right side of the array. You can remove items from array with .pop() methods, and items on the right side will be removed.
        </p>
        <p>
            You can change items in an array with myArray[0] = 'new string' syntax. Also, index number starts from 0. For example, the second item in the array is index 1.
        </p>
        <p>
            In this chapter, I made movies array. You can see movie posters on the right side when you write movie titles in editor. Control your own cinema by manipulating the movie arrays.
        </p>
    </>,
    <>
        <h1>Chapter 6. Loops</h1>
        <p>
            Loops can repeat some actions. For of loops perform repetitive actions. We don't have to code the same thing over and over agian.
        </p>
        <p>
            There are variety of for loops, and for of loops are most commonly used. Also, the for of loops through a given array, and runs a set of commands in each item of the array.
        </p>
        <p>
            You can checkout your grocery items with Loops. When you put the grocery items in the items array, it will appear in the shopping cart. Then, it will go in front of cashier. Next, the for loops make the items go to the cashier.
        </p>
        <p>
            Create prices array and for-in loop to checkout items and prices. Then, you will see the prices on the cash register.
        </p>
    </>,
    <>
        <h1>Chapter 7. Objects</h1>
        <p>
            Objects store collections of key-value pairs. When we use objects code, we can iterate through objects using the For...in syntax. Also, We can navigate complex, nested objects by chaining operators.
        </p>
        <p>
            You can create a warrior or a wizard, and edit number of health, attack, defense, and speed. Also, when you click spacebar, the characters change their body shape that look like they are attacking.
        </p>
        <p>
            I made the red hp bar above the characters, to show the characters' health. So, when you attack other character by clicking spacebar, it's hp decreases, so the hp will get lower and lower.
        </p>
    </>

]

export {editorValues, chapterNames, descriptions}
