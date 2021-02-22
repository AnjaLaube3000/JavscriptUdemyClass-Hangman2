// Making an HTTP Request
const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      resolve(data.puzzle)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place.')
    }
  })
  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  request.send()
}
)

// HTTP Request for countryCode
const getCountryCode = (countryCode) => new Promise((resolve, reject) => {
  const countryRequest = new XMLHttpRequest()

  countryRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const match = data.find((match) => match.alpha2Code === countryCode)
      resolve(match)
    } else if (e.target.readyState === 4) {
      reject('An error has taken place.')
    }
  })

  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
  countryRequest.send()
})


