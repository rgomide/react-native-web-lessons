const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usuarioModel = require('../model/usuario.model')
const usuarioView = require('../view/usuario.view')

router.post('/auth/register', async (req, res) => {
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Informe nome, e-mail e senha' })
  }

  const usuarioExistente = await usuarioModel.findByEmail(email)

  if (usuarioExistente) {
    return res.status(409).json({ erro: 'E-mail já cadastrado' })
  }

  const usuario = await usuarioModel.create({ nome, email, senha })

  res.status(201).json(usuarioView.toJson(usuario))
})

router.post('/auth/login', async (req, res) => {
  const { email, senha } = req.body

  if (!email || !senha) {
    return res.status(400).json({ erro: 'Informe e-mail e senha' })
  }

  const usuario = await usuarioModel.findByEmail(email)

  // Mesma mensagem para e-mail inexistente e senha errada: nao revela
  // quais e-mails estao cadastrados
  if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
    return res.status(401).json({ erro: 'E-mail ou senha inválidos' })
  }

  const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  )

  res.json({ token })
})

module.exports = router
