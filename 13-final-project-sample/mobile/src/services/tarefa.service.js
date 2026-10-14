import { request } from './api'

// GET /tarefas
export const listarTarefas = (token) =>
  request('/tarefas', { token })

// GET /tarefas/:id
export const buscarTarefa = (token, id) =>
  request(`/tarefas/${id}`, { token })

// POST /tarefas  body: { titulo, descricao }
export const criarTarefa = (token, { titulo, descricao }) =>
  request('/tarefas', { method: 'POST', body: { titulo, descricao }, token })

// PUT /tarefas/:id  body: { titulo, descricao, concluida }
export const alterarTarefa = (token, id, { titulo, descricao, concluida }) =>
  request(`/tarefas/${id}`, {
    method: 'PUT',
    body: { titulo, descricao, concluida },
    token
  })

// DELETE /tarefas/:id
export const excluirTarefa = (token, id) =>
  request(`/tarefas/${id}`, { method: 'DELETE', token })
