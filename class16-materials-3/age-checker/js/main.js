//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too



function checkAge(){
    let age = Number(document.querySelector('input').value)
    let result = document.querySelector('p')
    if(age<16){
        result.innerText = 'they can not drive'
    }else if(age < 18){
        result.innerText = 'can\'t hate from outside the club, because they can\'t even get in'
    }else if(age < 21){
        result.innerText = 'you can\'t drink'
    }else if(age < 25){
        result.innerText = 'you cannot rent cars'
    }else if(age < 30){
        result.innerText = 'you cannot rent luxury cars'
    }else{
        result.innerText = 'you have nothing to look forward to'
    }
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph



document.querySelector('h1').addEventListener('click', checkAge)