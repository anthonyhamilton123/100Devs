//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value.replaceAll(' ', '_')
    

    
    let fetchDrink = function(){
        let x = 0
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then((data, x) => {
            console.log(data)
            document.querySelector('h2').innerText = data.drinks[x].strDrink
            document.querySelector('h3').innerText = data.drinks[x].strInstructions
            document.querySelector('img').src = data.drinks[x].strDrinkThumb
        })
        .catch(err => {
            console.log('error')
        })
        x++
    }

    setInterval(fetchDrink(), 2000)
}



