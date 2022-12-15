//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [23,45,66,1]
//alert(arr.reduce(x => x+=x))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function arrSquared(arr){
    let newArr = []
    newArr.push(Number(arr.forEach(x => x = x * x)))
    console.log(newArr)
}

arrSquared(arr)
//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
