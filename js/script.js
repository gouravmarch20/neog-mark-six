const fetch = require('node-fetch')

const serverUrl = 'https://api.funtranslations.com/translate/minion.json?'
// console.log(`${serverUrl}text="i am "`)
fetch(`${serverUrl}text="i am "`)
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result)
  })
  .catch(error => {
    console.error('Error:', error)
  })
