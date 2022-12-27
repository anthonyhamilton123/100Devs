//Example fetch using pokemonapi.co
//document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = Math.floor(Math.random()*500000)
  console.log(choice)
  const url = 'https://api.artic.edu/api/v1/artworks/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()
