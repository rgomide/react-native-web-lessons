const toJson = (anotacao) => {
  return {
    id: anotacao.id,
    id_tarefa: anotacao.id_tarefa,
    texto: anotacao.texto,
    data_cadastro: anotacao.data_cadastro
  }
}

const arrayToJson = (anotacoes) => {
  return anotacoes.map((anotacao) => toJson(anotacao))
}

module.exports = {
  toJson,
  arrayToJson
}
