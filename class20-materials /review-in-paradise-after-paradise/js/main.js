// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function hiBye(arr){
    if(arr[0]<arr[arr.length-1]){
        alert("HI")
    }else if(arr[0]>arr[arr.length-1]){
        alert("Bye")
    }else{
        alert('We close in an hour')
    }
}

hiBye([1,2,4,5,6])
hiBye([4,3,2,1])
hiBye([5,1,5])