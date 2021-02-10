// 1. Disable new guesses unless "playing"

// 2. Set up a new method to get back a status Message
// Playing: "Guesses left: 3"
// Failed "Nice try! The word was "CAT"
// Finished " Great work! You guessed the word"


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const game1 = new Hangman("playground", 5)

puzzleEl.textContent = game1.getPuzzle()
messageEl.textContent = game1.statusMessage()
console.log(game1.checkStatus())

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  messageEl.textContent = game1.statusMessage()
  console.log(game1.checkStatus())
})
