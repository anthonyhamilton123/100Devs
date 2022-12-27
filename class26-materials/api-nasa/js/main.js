//Example fetch using pokemonapi.co

function getFetch(){
  const url = 'https://api.nasa.gov/planetary/apod?api_key=R6M1dhJaOnIbMcbZj6QqZcSX6v3GVIoQFgV8966V'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()