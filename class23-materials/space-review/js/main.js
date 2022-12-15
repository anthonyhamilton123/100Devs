//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [2,3,4]
alert(arr.reduce((acc,c) => acc += c))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const newArr = [3,4,5]
function squared(arr){
    return arr.map(x => x * x)
}
squared(newArr)

//Create a function that takes string
//Print the reverse of that string to the console

// function reverseStr(str){
//     let splitStr = str.split('')
//     let arr = []
//     for(let i = 0; i < splitStr.length; i++){
//         arr.unshift(splitStr[i])
//     }
//     return arr.join('')
// }

let unoReverse = str=> console.log(str.split('').reverse().join(''))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function alertIfPalindrome(str){
    let revStr = str.split('').reverse().join('')
    if (str === revStr){
        return 'THIS IS A PALINDROME'
    }else{
        return 'NOT A PALINDROME'
    }
}