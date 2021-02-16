const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const game1 = new Hangman("Radl fahren", 5)

puzzleEl.textContent = game1.puzzle
messageEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  messageEl.textContent = game1.statusMessage
})


// Making an HTTP Request

// const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     console.log(data)
//   } else if (e.target.readyState === 4) {
//     console.log('An error has taken place.')
//   }
// })


// Make a new request for all countries
// Parse the responseText to get back the array of objects
// Find your country object by it's country code(alpha2Code property)
// Print the full country name (name property)
const countryRequest = new XMLHttpRequest()

const countryCode = 'DE'

countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const match = data.find((match) => match.alpha2Code === countryCode)
    console.log(match.name)
  } else if (e.target.readyState === 4) {
    console.log('An error has taken place.')
  }
})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()
