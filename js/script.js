const englishText = document.querySelector('#user-input')
const minionTranslate = document.querySelector('#minion-translate')
const minionOutput = document.querySelector('#minion-output')
const q = document.querySelector('#q')
const p = document.querySelector('#heading')

const serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function createFinalUrl (serverUrl) {
  userInput = englishText.value
  return `${serverUrl}?text=${userInput}`
}

function takeInput () {
  userInput = englishText.value
  // console.log(createFinalUrl(serverUrl))
  fetch(createFinalUrl(serverUrl))
    .then(response => response.json())
    .then(result => {
      console.log(result.contents.translation)
      console.log(result)
      p.innerText = result.contents.translated
    })
    .catch(error => {
      console.log('object')
      console.error('Error:', error)
    })
}

minionTranslate.addEventListener('click', takeInput)
