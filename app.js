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

getPuzzle('3', (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

getCountryCode('DE', (error, request) => {
  if (error) {
    console.log(`Error: ${erros}`)
  } else {
    console.log(request)
  }
})
