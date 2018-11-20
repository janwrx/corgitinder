const BASE = 'https://shrouded-fjord-30897.herokuapp.com/'

let getCorgis = function() {
  return fetch(BASE + '/corgis')
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

let createCorgi = function(corgi) {
  return fetch(BASE + '/corgis', {
    body: JSON.stringify(corgi),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  })
    .then((resp) => {
      let json = resp.json()
      return json
    })
}

let getCorgi = function(id) {
  return fetch(BASE + '/corgis/' + id)
    .then((resp) => {
      let json = resp.json()
      console.log(json);
      return json
    })
}

export {
  getCorgis, createCorgi, getCorgi
}
