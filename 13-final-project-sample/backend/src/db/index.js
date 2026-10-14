const { Pool } = require('pg')

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}

const pool = new Pool(dbConfig)

const closeConnection = async () => {
  await pool.end()
}

const query = async (text, params) => {
  const result = await pool.query(text, params)
  return result
}

module.exports = { closeConnection, query }
