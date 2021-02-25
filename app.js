const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) =>{
//   console.log(country.name)
// }).catch((error) => {
//   console.log('Error:', error)
// })

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
// getLocation().then((data) => {
//   return getCountryCode(data.country)
// }).then((data) => {
//   console.log(data.name)
// }).catch((err) => {
//   console.log(`Sorry. An error occured: ${err}`)
// })
