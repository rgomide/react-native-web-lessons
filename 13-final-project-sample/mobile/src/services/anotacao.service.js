import { request } from './api'

// GET /tarefas/:id/anotacoes
export const listarAnotacoes = (token, idTarefa) =>
  request(`/tarefas/${idTarefa}/anotacoes`, { token })

// POST /tarefas/:id/anotacoes  body: { texto }
export const criarAnotacao = (token, idTarefa, texto) =>
  request(`/tarefas/${idTarefa}/anotacoes`, {
    method: 'POST',
    body: { texto },
    token
  })

// DELETE /anotacoes/:id
export const excluirAnotacao = (token, id) =>
  request(`/anotacoes/${id}`, { method: 'DELETE', token })
