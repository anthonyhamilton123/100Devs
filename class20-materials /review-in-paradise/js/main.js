// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let faveFood = ''
faveFood = 'hamburger'
alert(faveFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = 'hello'
alert(str[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNum(a,b,c){
    alert(a/b*c)
}

threeNum(3,4,5)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(x){
    console.log(Math.cbrt(x))
}

oneNum(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function whatMonth(month){
    let monthLowerCase = month.toLowerCase()
    if (monthLowerCase == 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
        alert('YAY')
    }else{
        alert('boo')
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function newNum(x){
    for (let i = 1; i <= x; i++){
        if(x%5 !== 0){
            console.log(i)
        }
    }
}