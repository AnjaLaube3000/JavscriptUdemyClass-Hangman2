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
const getCountryCode = (countryCode) => {
  return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error("Unable to fetch the right country code.")
    }
  }).then((data) => {
    const match = data.find((match) => match.alpha2Code === countryCode)
    return match
  })
}


// HTTP Request Challange
const getLocation = () => {
  return fetch('https://www.ipinfo.io/json?token=95d19ebd923c25').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error("Can't fetch the data you requested.")
    }
  }).then((data) => {
    return data
  })
}


