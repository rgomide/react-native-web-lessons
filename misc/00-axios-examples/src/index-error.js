import axios from 'axios';

console.log('INÍCIO')

const response = axios.get('https://rickandmortyapi.com/api/character/?name=Juggling Rick')

console.log(response)

console.log('FIM')
