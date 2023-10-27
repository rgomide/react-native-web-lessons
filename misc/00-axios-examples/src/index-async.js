import axios from 'axios';

console.log('INÍCIO')

axios.get('https://rickandmortyapi.com/api/character/?name=Juggling Rick').then((response) => {
  console.log(response.data)
  console.log('SUCESSO')
}).catch((error) => {
  console.log(error)
  console.log('ERRO')
})

console.log('FIM')
