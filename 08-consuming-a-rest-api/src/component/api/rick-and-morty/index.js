const baseURL = 'https://rickandmortyapi.com/api/'
const timeout = 5000

// fetch has no built-in timeout, so we abort the request ourselves with an
// AbortController.
const request = async (url) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, { signal: controller.signal })

    // Unlike axios, fetch does NOT reject on HTTP error status codes (404, 500...).
    // We have to check response.ok ourselves.
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return await response.json()
  } finally {
    clearTimeout(timeoutId)
  }
}

const getNextCharacterPage = async (url) => {
  return await request(url)
}

const getCharacter = async ({ name = '' }) => {
  const uri = encodeURI(`${baseURL}character/?name=${name}`)
  return await request(uri)
}

export { getCharacter, getNextCharacterPage }
