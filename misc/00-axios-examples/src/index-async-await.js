import axios from 'axios'

console.log('INÍCIO')

const chamarApi = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/?name=Juggling Rick')
    console.log(response.data)
    console.log('SUCESSO')
  } catch (error) {
    console.log(error)
    console.log('ERRO')
  }
}

await chamarApi()


console.log('FIM')