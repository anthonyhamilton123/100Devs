// *Variables*
// Create a variable and console log the value
let number = 1;
console.log(number);
// Create a variable, add 10 to it, and alert the value

let numberTwo = 2;

alert(numberTwo + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(a, b, c, d) {
    alert(a-b-c-d);
}


// Create a function that divides one number by another and returns the remainder

function modTwo(a,b){
    return a%b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumanjiFifty(a,b){
    let sum = a + b
    if (sum > 50) {
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraThree(a,b,c){
    let product = a * b * c;
    if (product % 3 == 0){
        alert('ZEBRA');
    }
}