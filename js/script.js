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
  // console.log(createFinalUrl(serverUrl))
  fetch(createFinalUrl(serverUrl))
    .then(response => response.json())
    .then(result => {
      console.log(result.contents.translation)
      console.log(result)
      displayOutput.style.display = 'flex'
      displayOutput.innerText = result.contents.translated
    })
    .catch(error => {
      displayOutput.style.display = 'flex'
      displayOutput.innerText = 'Error occur . api limit exceed '
    })
}

minionTranslate.addEventListener('click', takeInput)
