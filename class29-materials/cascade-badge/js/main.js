//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverseOrder(arr){
    return arr.reverse()
}

console.log(reverseOrder([1,2,3,4]))

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function sqrAndCube(a, b){
    //make squares of a
    let sqrA = a.map(x => x ** 2)
    let newA = sqrA.reduce((acc, c) => acc += c)
    //make cubes of b
    let sqrB = b.map(x => x ** 3)
    let newB = sqrB.reduce((acc, c) => acc += c)
    //compare
    return (newA > newB) ? true : false
}

console.log(sqrAndCube([4,5,6], [1,2,3]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexDivis(arr){
    let newArr = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%i === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}



//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number. 

function arrOfStrings(a){
    let newArr = a.map(x => +x)
    return newArr.reduce((acc, c) => acc += c)
}

console.log(arrOfStrings(['1','2','3']))