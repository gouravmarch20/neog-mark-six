const englishText = document.querySelector('#user-input')
const minionTranslate = document.querySelector('#minion-translate')
const displayOutput = document.querySelector('#display-output')

const serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function createFinalUrl (serverUrl) {
  userInput = englishText.value
  return `${serverUrl}?text=${userInput}`
}

function takeInput () {
  userInput = englishText.value
  fetch(createFinalUrl(serverUrl))
    .then(response => response.json())
    .then(result => {
      if (userInput === '') {
        alert('input require ')
      }
      displayOutput.innerText = result.contents.translated
      displayOutput.style.color = 'white'
    })
    .catch(error => {
      displayOutput.style.color = 'white'

      displayOutput.innerText = 'Error occur . api limit exceed '
    })
}

minionTranslate.addEventListener('click', takeInput)
