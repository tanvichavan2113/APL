// //using module methods

// const arithmeticOperations = require('./arithmeticOperations');

// const resultAddition = arithmeticOperations.add(5, 3);
// const resultSubtraction = arithmeticOperations.subtract(10, 4);
// const resultMultiplication = arithmeticOperations.multiply(6, 7);
// const resultDivision = arithmeticOperations.divide(15, 3);

// console.log('Addition:', resultAddition);
// console.log('Subtraction:', resultSubtraction);
// console.log('Multiplication:', resultMultiplication);
// console.log('Division:', resultDivision);



//with user input 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getUserInput = (question) => new Promise(resolve => rl.question(question, resolve));

const main = async () => {
    const num1 = parseFloat(await getUserInput('Enter the first number: '));
    const num2 = parseFloat(await getUserInput('Enter the second number: '));

    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero');

    console.log('Addition:', add(num1, num2));
    console.log('Subtraction:', subtract(num1, num2));
    console.log('Multiplication:', multiply(num1, num2));
    console.log('Division:', divide(num1, num2));

    rl.close();
};

main();
