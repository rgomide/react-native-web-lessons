const toJson = (tarefa) => {
  return {
    id: tarefa.id,
    titulo: tarefa.titulo,
    descricao: tarefa.descricao,
    concluida: tarefa.concluida,
    data_cadastro: tarefa.data_cadastro
  }
}

const arrayToJson = (tarefas) => {
  return tarefas.map((tarefa) => toJson(tarefa))
}

module.exports = {
  toJson,
  arrayToJson
}
