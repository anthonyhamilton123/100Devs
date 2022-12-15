//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ['spiderman', 'spiderman2', 'spiderman 3']

movies.forEach((x, i) => document.querySelector('h2').innerText += x)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let nums = [1, 2, 3, 4]

//nums.forEach((x, i) => nums[i] = x + 3)


//Find the average of all the numbers from question three
let sum = 0

nums.forEach((x) => sum += x)

console.log(sum / nums.length)
