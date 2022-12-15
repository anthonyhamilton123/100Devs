// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str
str = "Hello world how are you?"
if(str.charAt(str.length-1) === "?"){
    alert(str)
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let multiWord = "I am a jr. dev"
multiWord.replace('jr. dev', 'Software Engineer')

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function RPS(){
    let num = Math.random()
    if(num<.33){
        return 'rock'
    }else if(.33<num<.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRPS(select){
    let compSelect = RPS()
    if((select == 'rock' && compSelect == 'scissors') || (select == 'scissors' && compSelect == 'paper') || (select == 'paper' && compSelect == 'rock')){
        return 'Player Wins'
    }else if(select == compSelect){
        return 'tie'
    }else{
        return 'Comp Wins'
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function rpsArray(array){
    array.forEach(item => playRPS(item))
}