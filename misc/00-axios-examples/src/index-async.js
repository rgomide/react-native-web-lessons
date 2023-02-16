import axios from 'axios';

console.log('INÍCIO')

axios.get('https://legacy--api.herokuapp.com/api/v1/books/1').then((response) => {
  console.log(response.data)
  console.log('SUCESSO')
}).catch((error) => {
  console.log(error)
  console.log('ERRO')
})

console.log('FIM')
