// Scenario: You are building a calculator for an online math game. The
// calculator must include functionality to perform the following:
// ● Absolute Value Calculation: Given any number, return its absolute
// value.
// ● Power Calculation: Calculate and return the value of a base raised to
// a specific power.
// ● Square Root Finder: Calculate the square root of a number.
// ● Maximum and Minimum Finder: From a given set of numbers,
// determine the largest and smallest values.
// ● Random Number Generator: Generate a random integer within a
// specified range.
// ● Custom Rounding: Round a number to a specified number of decimal
// places.

// Step-by-Step Tasks:
// 1. Write a function for each operation listed above using the Math
// module.
// 2. Test each function with sample inputs to ensure it works as intended.
// 3. Combine the individual functions into a single "calculator" program
// where the user can select an operation and input the required values.
// 4. Test the calculator by performing the following:
// ● Find the absolute value of -45.67.
// ● Raise 5 to the power of 3.
// ● Calculate the square root of 144.
// ● Determine the largest and smallest values from [3, 78, -12,
// 0.5, 27].
// ● Generate a random number between 1 and 50.

//Absolute Value Calculation: Given any number, return its absolute value.

function absoluteValueCalc (number) {
    return Math.abs(number);
}

console.log(absoluteValueCalc(-45.67)); //returns 45.67

//Power Calculation: Calculate and return the value of a base raised to a specific power.
function calcPower (base, exponent) {
    return Math.pow(base, exponent);
}

console.log(calcPower(5,3)); //return 125

// Square Root Finder: Calculate the square root of a number.
function calcSquareRoot (number) {
    return Math.sqrt(number);
}

console.log(calcSquareRoot(144)); //return 12
// Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
function calcMaxAndMin (numbers) {
    return {
        max: Math.max(numbers),
        min: Math.min(numbers)
    };
}

console.log(calcMaxAndMin(3, 78, -12, 0.5, 27)); //{ max: 3, min: 3 }

// Random Number Generator: Generate a random integer within a specified range.
//function getRandomNumber(min, max) {
//    return Math.floor(Math.random() * (max - min + 1))
//}


// Custom Rounding
function customRounding(number, decimals) {
    return Number(number.toFixed(decimals));
}
console.log (customRounding(45.7898, 3)); //returns 45.79