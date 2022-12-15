// // *Variables*
// // Declare a variable, assign it a value, and alert the value

// let num = 10

// alert(num)

// // Create a variable, divide it by 10, and console log the value

// let numTwo = 20

// console.log(numTwo/20)

// // *Functions*
// // Create a function that multiplys 3 numbers and alerts the product

// function productThree(a,b,c){
//     alert(a*b*c)
// }

// productThree(2,3,4)

// // Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// function addThenSubtract(a,b,c,d){
//     console.log(a-b-c-d)
// }

// addThenSubtract(5,4,3,2)

// // *Conditionals*
// // Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// function startHundred(a,b,c){
//     let result = (100 + a - b)/c
//     if (result>25){
//         console.log('WE HAVE A WINNA')
//     }
// }

// startHundred(100,1,2)

// // Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"]

// function isItWeekend(str){
//     let day = str.toLowerCase()
//     if (day == 'saturday' || day == 'sunday'){
//         alert('weekend')
//     }else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday'){
//         alert('week day')
//     }else{
//         alert('try again')
//     }
// }

// isItWeekend('Saturday')
// isItWeekend('mOnday')
// isItWeekend('tiger')

// //*Loops*
// //Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

// function countBy3(a){
//     for (let i = 1; i < a+3; i+=3){
//         console.log(i);
//     }
// }

// countBy3(30)


let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

let number3 = number1
let number4 = number2

number1 = number4
number2 = number3


console.log(number1); // Should show 3
console.log(number2); // Should show 5