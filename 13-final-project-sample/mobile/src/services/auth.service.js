import { request } from './api'

// POST /auth/login -> { token }
export const login = (email, senha) =>
  request('/auth/login', { method: 'POST', body: { email, senha } })

// POST /auth/register -> { id, nome, email }
export const cadastrar = ({ nome, email, senha }) =>
  request('/auth/register', { method: 'POST', body: { nome, email, senha } })
