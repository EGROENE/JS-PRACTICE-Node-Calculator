// Why is 'return' keyword necessary in the else statement of getNum(), but not in getOperator()?

// Initialize variable of rs (for npm package 'readline-sync'):
let rs = require('readline-sync');
// let isOperator = false;
// Had !isOperator && in if statement in getOperator, but not necessary

// Function to get operator and perform checks:
const getOperator = () => {
    operator = rs.question("What operation would you like to perform? ");

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        // getNum();
    } else {
        console.log("That is not a valid operation.");
        getOperator();
    }
}

// Function to get numbers and perform necessary checks:
const getNum = (type) => {
    let someNum = rs.question(`Please enter the ${type} number: `);
    if (!isNaN(someNum)) {
        /* someNum = Number(someNum); */
        return someNum;
    } else {
        console.log("Please enter a valid number.");
        return getNum(type);
    }
}

// Function to do the calculations, based on the user's input:
const calc = () => {
    if (operator === '+') {
        let sum = num1 + num2;
        return sum;
    } else if (operator === '-') {
        let diff = num1 - num2;
        return diff;
    } else if (operator === '*') {
        let product = num1 * num2;
        return product;
    } else if (operator = '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            getOperator();
        } else {
            let quotient = num1 / num2;
            return quotient.toFixed(2);
        }
    }
}
getOperator();
num1 = Number(getNum('first'));
num2 = Number(getNum('second'));
console.log(calc());