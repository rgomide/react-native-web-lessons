const { query } = require('../db')

const findByTarefa = async (idTarefa) => {
  const result = await query(
    'SELECT * FROM anotacao WHERE id_tarefa = $1 ORDER BY data_cadastro DESC',
    [idTarefa]
  )
  return result.rows
}

const create = async ({ texto, id_tarefa }) => {
  const result = await query(
    'INSERT INTO anotacao (texto, id_tarefa) VALUES ($1, $2) RETURNING *',
    [texto, id_tarefa]
  )
  return result.rows[0]
}

// A anotacao so e apagada se a tarefa dela pertencer ao usuario
const remove = async (id, idUsuario) => {
  const result = await query(
    `DELETE FROM anotacao
     WHERE id = $1
       AND id_tarefa IN (SELECT id FROM tarefa WHERE id_usuario = $2)`,
    [id, idUsuario]
  )
  return result.rowCount > 0
}

module.exports = {
  findByTarefa,
  create,
  remove
}
