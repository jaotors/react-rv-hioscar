require('es6-promise').polyfill();
require('isomorphic-fetch');

const apiUrl = 'http://localhost:5050/api/person?case='

const checkStatus = response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const getJSON = response => {
  return response.json()
}

export const getMessage = caseNum => {
  return fetch(`${apiUrl}${caseNum}`, {method: 'GET'})
    .then(checkStatus)
    .then(getJSON)
    .then(data => data)
    .catch(err => {
      console.log(`Error: ${err}`)
    })
}