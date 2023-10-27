import axios from 'axios';

console.log('INÍCIO')

try {
  const response = await axios.get('https://rickandmortyapi.com/api/character/?name=Juggling Rick')

  console.log(response.data)

  console.log('SUCESSO')
} catch (error) {
  console.log(error)
  console.log('ERRO')
}

console.log('FIM')