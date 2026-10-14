const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token não informado' })
  }

  const token = authHeader.split(' ')[1]

  try {
    // payload: { id, nome, email } gravado no login
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = payload
    next()
  } catch (error) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' })
  }
}

module.exports = authMiddleware
