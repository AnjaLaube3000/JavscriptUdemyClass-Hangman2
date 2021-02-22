// Making an HTTP Request
const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch the data')
    }
  }).then ((data) => {
    return data.puzzle
})
}

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


