//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function productArr(arr){
    let prod = 1
    arr.forEach((x) => prod *= x)
    alert(prod)
}

productArr([3,4,5,6])

