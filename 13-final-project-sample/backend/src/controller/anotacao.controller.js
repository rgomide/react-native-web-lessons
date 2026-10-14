const router = require('express').Router()
const authMiddleware = require('../middleware/auth')
const anotacaoModel = require('../model/anotacao.model')
const tarefaModel = require('../model/tarefa.model')
const anotacaoView = require('../view/anotacao.view')

// Converte o :id do caminho para inteiro; devolve null se for invalido
const lerId = (req) => {
  const id = Number(req.params.id)
  return Number.isInteger(id) ? id : null
}

router.get('/tarefas/:id/anotacoes', authMiddleware, async (req, res) => {
  const idTarefa = lerId(req)

  if (!idTarefa) {
    return res.status(400).json({ erro: 'Id da tarefa inválido' })
  }

  // Confere se a tarefa existe e pertence ao usuario logado
  const tarefa = await tarefaModel.findById(idTarefa, req.usuario.id)

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  const anotacoes = await anotacaoModel.findByTarefa(idTarefa)
  res.json(anotacaoView.arrayToJson(anotacoes))
})

router.post('/tarefas/:id/anotacoes', authMiddleware, async (req, res) => {
  const idTarefa = lerId(req)
  const { texto } = req.body

  if (!idTarefa) {
    return res.status(400).json({ erro: 'Id da tarefa inválido' })
  }

  if (!texto || !texto.trim()) {
    return res.status(400).json({ erro: 'Escreva o texto da anotação' })
  }

  const tarefa = await tarefaModel.findById(idTarefa, req.usuario.id)

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  const anotacao = await anotacaoModel.create({
    texto: texto.trim(),
    id_tarefa: idTarefa
  })

  res.status(201).json(anotacaoView.toJson(anotacao))
})

router.delete('/anotacoes/:id', authMiddleware, async (req, res) => {
  const id = lerId(req)

  if (!id) {
    return res.status(400).json({ erro: 'Id da anotação inválido' })
  }

  const removida = await anotacaoModel.remove(id, req.usuario.id)

  if (!removida) {
    return res.status(404).json({ erro: 'Anotação não encontrada' })
  }

  res.status(204).send()
})

module.exports = router
