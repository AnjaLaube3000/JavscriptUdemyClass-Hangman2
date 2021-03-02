// Making an HTTP Request
const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to fetch the data')
  }
}

// HTTP Request for countryCode - AsyncAwait
const getCountryCode = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')
  if (response.status === 200) {
    const data = await response.json()
    const match = data.find((match) => match.alpha2Code === countryCode)
    return match
  } else {
    throw new Error("Unable to fetch the right country code.")
  }
}

// HTTP Request Challange - asyncAwait
const getLocation = async () => {
  const response = await fetch('//www.ipinfo.io/json?token=95d19ebd923c25')
  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Can't fetch the data you requested.")
  }
}

// Write async/await function
const getCurrentCountry = async () => {
  const location = await getLocation()
  const country = await getCountryCode(location.country)
  return country

}

