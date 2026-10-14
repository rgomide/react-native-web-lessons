const router = require('express').Router()
const authMiddleware = require('../middleware/auth')
const tarefaModel = require('../model/tarefa.model')
const tarefaView = require('../view/tarefa.view')

// Converte o :id do caminho para inteiro; devolve null se for invalido
const lerId = (req) => {
  const id = Number(req.params.id)
  return Number.isInteger(id) ? id : null
}

router.get('/tarefas', authMiddleware, async (req, res) => {
  const tarefas = await tarefaModel.findByUsuario(req.usuario.id)
  res.json(tarefaView.arrayToJson(tarefas))
})

router.get('/tarefas/:id', authMiddleware, async (req, res) => {
  const id = lerId(req)

  if (!id) {
    return res.status(400).json({ erro: 'Id da tarefa inválido' })
  }

  const tarefa = await tarefaModel.findById(id, req.usuario.id)

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  res.json(tarefaView.toJson(tarefa))
})

router.post('/tarefas', authMiddleware, async (req, res) => {
  const { titulo, descricao } = req.body

  if (!titulo || !titulo.trim()) {
    return res.status(400).json({ erro: 'Informe o título da tarefa' })
  }

  const tarefa = await tarefaModel.create({
    titulo: titulo.trim(),
    descricao: descricao || null,
    id_usuario: req.usuario.id
  })

  res.status(201).json(tarefaView.toJson(tarefa))
})

router.put('/tarefas/:id', authMiddleware, async (req, res) => {
  const id = lerId(req)
  const { titulo, descricao, concluida } = req.body

  if (!id) {
    return res.status(400).json({ erro: 'Id da tarefa inválido' })
  }

  if (!titulo || !titulo.trim()) {
    return res.status(400).json({ erro: 'Informe o título da tarefa' })
  }

  if (typeof concluida !== 'boolean') {
    return res.status(400).json({ erro: 'Informe se a tarefa está concluída' })
  }

  const tarefa = await tarefaModel.update(id, req.usuario.id, {
    titulo: titulo.trim(),
    descricao: descricao || null,
    concluida
  })

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  res.json(tarefaView.toJson(tarefa))
})

router.delete('/tarefas/:id', authMiddleware, async (req, res) => {
  const id = lerId(req)

  if (!id) {
    return res.status(400).json({ erro: 'Id da tarefa inválido' })
  }

  const removida = await tarefaModel.remove(id, req.usuario.id)

  if (!removida) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' })
  }

  res.status(204).send()
})

module.exports = router
