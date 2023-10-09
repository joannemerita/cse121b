/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value)
    let subtractNumber2 = Number(document.querySelector('#subtract2').value)

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value)
    let factor2 = Number(document.querySelector('#factor2').value)

    document.querySelector('#product').value = multiply(factor1, factor2)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {
    let dividend = Number(document.querySelector('#dividend').value)
    let divisor = Number(document.querySelector('#divisor').value)

    document.querySelector('#quotient').value = divide(dividend, divisor)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */

let date = new Date()
let year = date.getFullYear()

document.querySelector('#year').innerHTML = year

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

/* Output Odds Only Array */
let oddNumbers = numbers.filter((number) => number % 2 !== 0)
document.querySelector('#odds').innerHTML = oddNumbers

/* Output Evens Only Array */
let evenNumbers = numbers.filter((number) => number % 2 == 0)
document.querySelector('#evens').innerHTML = evenNumbers

/* Output Sum of Org. Array */
let sumOfNumbers = numbers.reduce((sum, number) => sum + number)
document.querySelector('#sumOfArray').innerHTML = sumOfNumbers

/* Output Multiplied by 2 Array */
let multipliedNumbers = numbers.map((number) => number * 2)
document.querySelector('#multiplied').innerHTML = multipliedNumbers

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedby2 = numbers.map((number) => number * 2).reduce((sum, number) => sum + number)
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedby2
