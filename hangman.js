// 1. Disable new guesses unless "playing"

// 2. Set up a new method to get back a status Message
// Playing: "Guesses left: 3"
// Failed "Nice try! The word was "CAT"
// Finished " Great work! You guessed the word"

const Hangman = function (word, possibleGuesses) {
  this.word = word.toLowerCase().split('')
  this.possibleGuesses = possibleGuesses
  this.guessedLetters = []
  this.status = 'playing'
  this.message = "Good luck!"
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === '') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle
}

Hangman.prototype.makeGuess = function (guess) {

  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (game1.status !== "playing") {
    return
  }

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
  this.possibleGuesses--
  }

  this.checkStatus
}


Hangman.prototype.checkStatus = function () {
  if (this.possibleGuesses === 0) {
    return this.status = 'failed'
  } else if (!puzzleEl.textContent.includes('*') && this.possibleGuesses > 0) {
    return this.status = 'finished'
  } else {
    return this.status = 'playing'
  }
}


Hangman.prototype.statusMessage = function () {
  if (this.status === "playing") {
    return this.message = `Guesses left: ${this.possibleGuesses}`
  } else if (this.status === 'failed') {
    return this.message = `Nice try! The word was '${this.word.join('')}!'`
  } else if (this.status === 'finished') {
    return this.message = `Great work! You guessed the word`
  }
}
