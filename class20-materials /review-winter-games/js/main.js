//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenArray(arr){
    let onlyEvens = []
    arr.forEach( n => {
        if(n % 2 === 0){
            onlyEvens.push(n)
        }
    })
    return onlyEvens
}

let arr1 = [1,2,3,4,5]
let arr2 = [10,20,33,55]
let arr3 = [2,4,6,8,10,11]

console.log(evenArray(arr1))
console.log(evenArray(arr2))
console.log(evenArray(arr3))