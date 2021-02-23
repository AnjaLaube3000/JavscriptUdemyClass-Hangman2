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

getPuzzle('3').then((puzzle) => {
  console.log(puzzle)
}).catch((error) => {
    console.log(`Error: ${error}`)
})

// getCountryCode('DE').then((match) => {
//   console.log(match.name)
// }).catch((error) => {
//   console.log(`Error" ${error}`)
// })

// 3. Use getLocation to print a little message using the city, county and country
// getLocation().then((data) => {
//   console.log(`This ip address is registered for ${data.city}, ${data.region} in ${data.country}.`)
// }).catch((err) => {
//   console.log(`Sorry. An error occured: ${err}`)
// })

//4. Modify getLocation call to get full country name
getLocation().then((data) => {
  return getCountryCode(data.country)
}).then((data) => {
  console.log(data.name)
}).catch((err) => {
  console.log(`Sorry. An error occured: ${err}`)
})
