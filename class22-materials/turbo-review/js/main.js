// // *Variables*
// // Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

// let favDrink = '    coke    '
// console.log(favDrink.trim(), favDrink)

// //Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// let str = "Coke and apple juice"
// console.log(str.includes('apple'))

// // *Functions*
// // Create a function that returns rock, paper, or scissors as randomly as possible

// function rockPaperScissors(){
//     let choice = Math.random()
//     if(choice<=.33){
//         return 'rock'
//     }else if(choice>.33 && choice<=.66){
//         return 'paper'
//     }else{
//         return 'scissors'
//     }
// }

// // *Conditionals*
// //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

// // function userRPS(userChoice){
// //     let compChoice = rockPaperScissors()
// //     if(userChoice === 'rock' && compChoice === 'scissors'){
// //         console.log('user wins!')
// //     }else if(userChoice === 'paper' && compChoice === 'rock'){
// //         console.log('user wins!')
// //     }else if(userChoice === 'scissors' && compChoice === 'paper'){
// //         console.log('user wins!')
// //     }else{
// //         console.log('computer wins!')
// //     }
// // }

// function userRPS(userChoice){
//     let compChoice = rockPaperScissors()
//     if((userChoice === 'rock' && compChoice === 'scissors') || 
//     (userChoice === 'paper' && compChoice === 'rock')||
//     (userChoice === 'scissors' && compChoice === 'paper')){
//         console.log('user wins!')
//     }else if(userChoice === compChoice){
//         console.log('tie')
//     }else{
//         console.log('computer wins!')
//     }
// }


// userRPS('rock')
// userRPS('paper')
// userRPS('scissors')

// //*Loops*
// //Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// function playXTimes(arr){
//     arr.forEach(item => userRPS(item))
// }

// playXTimes(['rock','paper','scissors'])

