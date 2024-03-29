class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
    this.message = "Good luck!"
  }
  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter || letter === ' '))

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }

    this.calculateStatus()
  }
  checkStatus() {
    if (this.remainingGuesses === 0) {
      return this.status = 'failed'
    } else if (!puzzleEl.textContent.includes('*') && this.remainingGuesses > 0) {
      return this.status = 'finished'
    } else {
      return this.status = 'playing'
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return this.message = `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return this.message = `"Nice try! The word was '${this.word.join('')}'`
    } else {
      return this.message = `Great work! You guessed the word!`
    }
  }
}


export { Hangman as default }
