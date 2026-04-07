const objeto = {
  nome: 'Denecley',
  matricula: 2123123,
  curso: 'Engenharia de Computacao'
}


const alunos = []
alunos.push(objeto) // O(n)

const alunosPorCurso = {
  'Engenharia de Computacao': [{}, {}]
}


// ...

// O(n)
alunos.filter()

// O(1)
alunosPorCurso['Engenharia de Computacao'] // array de alunos