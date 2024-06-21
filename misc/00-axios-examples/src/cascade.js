import axios from 'axios'

axios.get('https://rickandmortyapi.com/api/character/?name=Juggling Rick')
  .then(({ data }) => {
    console.log('PRIMEIRA REQUISIÇÃO')
    
    const { results } = data
    const locationUrl = results[0].location.url

    console.log(locationUrl)
    
    return axios.get(locationUrl)
  })
  .then(({ data }) => {
    console.log('SEGUNDA REQUISIÇÃO')

    console.log(data)
  })