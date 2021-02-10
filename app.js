const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const messageEl = document.querySelector('#message')
const game1 = new Hangman("playground", 5)

puzzleEl.textContent = game1.getPuzzle()
messageEl.textContent = game1.statusMessage()

window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.getPuzzle()
  messageEl.textContent = game1.statusMessage()
})
