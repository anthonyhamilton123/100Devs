// *Variables*
// Create a variable and console log the value

let num = 10;

console.log(num)

// Create a variable, add 10 to it, and alert the value

let zerba = 10;

zerba += 10

alert(zerba)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(a,b,c,d){
    alert(a-b-c-d)
}

// Create a function that divides one number by another and returns the remainder

function remainderOf(a,b){
    return a%b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanji50(a,b){
    let sum = a + b
    if (sum>50){
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function threeProduct(a, b, c){
    let product = a*b*c
    if(product%3==0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(a, b){
    for (i=1; i<=a; i++){
        console.log(b)
    }
}