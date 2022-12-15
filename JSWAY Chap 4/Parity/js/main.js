document.querySelector('#run').addEventListener('click', runLoop)




function runLoop(){
    
    for (let i = document.querySelector('#input').value; 2; i++) {
        if (i % 2 === 0) {
          console.log(`${i} is even`);
        }
        else{
            console.log(`${i} is odd`)
        }
      }
}

