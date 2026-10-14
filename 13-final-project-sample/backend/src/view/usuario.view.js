// Nunca devolve a senha nem o hash da senha
const toJson = (usuario) => {
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email
  }
}

const arrayToJson = (usuarios) => {
  return usuarios.map((usuario) => toJson(usuario))
}

module.exports = {
  toJson,
  arrayToJson
}
