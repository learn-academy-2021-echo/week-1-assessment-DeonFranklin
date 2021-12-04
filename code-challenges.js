// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 58
// let temp2 = 350
// let temp3
// var temp3 = 212
    if(temp >= 42 && temp <= 211){
        console.log(`${temp} is below boiling point.`);
    }
var temp2 = 350

    if(temp2 >= 213 && temp === 350){
        console.log(`${temp} is above boiling point.`);
    }
var temp3 = 212
    if(temp >= 211 && temp <= 213){
         console.log(`${temp} is at boiling point.`);
    }

// // // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// var myNumbers1 = [3, 7, 0, 36, -9]
// var myNumbers2 = [8, -7, 42, 9, 13]

// let myNumbers = (myNumbers1.concat(myNumbers2))
// console.log(myNumbers.length)


// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

// var currentCohort = 'Echo 2021"]




// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]

    for(let i = myArray; myArray % 2 === 0; myArray);{
    console.log('Even', myArray);
    if(myArray % 2 !== 0);
    (console.log('Odd', myArray));
    }
// // --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

// var number1 = 58
// var number2 = 100

// console.log(number2 - number1)

// var number1 = 27
// var number2 = 24  

// console.log(number1 - number2)

;