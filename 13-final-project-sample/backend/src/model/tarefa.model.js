const { query } = require('../db')

// Todas as consultas filtram por id_usuario: cada usuario so enxerga
// e altera as proprias tarefas.

const findByUsuario = async (idUsuario) => {
  const result = await query(
    'SELECT * FROM tarefa WHERE id_usuario = $1 ORDER BY concluida, data_cadastro DESC',
    [idUsuario]
  )
  return result.rows
}

const findById = async (id, idUsuario) => {
  const result = await query(
    'SELECT * FROM tarefa WHERE id = $1 AND id_usuario = $2',
    [id, idUsuario]
  )
  return result.rows[0]
}

const create = async ({ titulo, descricao, id_usuario }) => {
  const result = await query(
    'INSERT INTO tarefa (titulo, descricao, id_usuario) VALUES ($1, $2, $3) RETURNING *',
    [titulo, descricao, id_usuario]
  )
  return result.rows[0]
}

const update = async (id, idUsuario, { titulo, descricao, concluida }) => {
  const result = await query(
    `UPDATE tarefa SET titulo = $1, descricao = $2, concluida = $3
     WHERE id = $4 AND id_usuario = $5
     RETURNING *`,
    [titulo, descricao, concluida, id, idUsuario]
  )
  return result.rows[0]
}

// As anotacoes da tarefa sao apagadas pelo ON DELETE CASCADE
const remove = async (id, idUsuario) => {
  const result = await query(
    'DELETE FROM tarefa WHERE id = $1 AND id_usuario = $2',
    [id, idUsuario]
  )
  return result.rowCount > 0
}

module.exports = {
  findByUsuario,
  findById,
  create,
  update,
  remove
}
