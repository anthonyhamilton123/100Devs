//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let tvShows = ['power rangers', 'power rangers 2', 'power rangers 3']

tvShows.forEach(tvShow => console.log(tvShow))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numArr = [1,2,3,4,5,6,7,8,9,20]
let onlyEvens = arr => arr.filter(n => n%2 === 0)

console.log(onlyEvens(numArr))
// let numArr2 = []
// numArr.forEach(num => {
//     if (num % 2 === 0){
//         numArr2.unshift(num)
//     }
// })

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function arrNumberFunc(arr){
    let sorted = arr.sort((a,b)=>a-b)
    alert(sorted[1] + sorted[-2])
} 