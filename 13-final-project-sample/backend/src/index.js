const express = require('express')
const cors = require('cors')
const authController = require('./controller/auth.controller')
const tarefaController = require('./controller/tarefa.controller')
const anotacaoController = require('./controller/anotacao.controller')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', authController)
app.use('/', tarefaController)
app.use('/', anotacaoController)

// Erros nao tratados nas rotas (JSON mal formado, banco fora do ar...):
// responde no mesmo formato { erro } em vez da pagina HTML padrao do Express
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ erro: 'JSON inválido no corpo da requisição' })
  }

  console.error(err)
  res.status(500).json({ erro: 'Erro interno do servidor' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`)
})
