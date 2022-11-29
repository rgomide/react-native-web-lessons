import axios from 'axios';

console.log('INÍCIO')

try {
    const response = await axios.get('https://legacy--api.herokuapp.com/api/v1/books/1')
    console.log(response.data)
    console.log('SUCESSO')
} catch (error) {
    console.log(error)
    console.log('ERRO')
}

console.log('FIM')