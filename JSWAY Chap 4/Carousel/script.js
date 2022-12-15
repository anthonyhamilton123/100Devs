document.querySelector('#run').addEventListener('click', runLoop)


function runLoop(){
    const number = document.querySelector('#input').value
    for (let i = 1; i <= number; i++) {
        alert(i)
        }
}


// let number = 1;

// while (number <=10) {
//     alert(number);
//     number++
// }