// Unico lugar com o endereco do backend. O aplicativo roda no navegador
// (npm run web), na mesma maquina do backend.
const BASE_URL = 'http://localhost:3000'

// Funcao chamada quando uma rota protegida responde 401 (token expirado
// ou invalido). O AuthContext registra aqui a funcao que faz o logout.
let aoExpirarSessao = null

export const definirAoExpirarSessao = (funcao) => {
  aoExpirarSessao = funcao
}

export const request = async (caminho, { method = 'GET', body, token } = {}) => {
  const headers = { 'Content-Type': 'application/json' }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  let response

  try {
    response = await fetch(`${BASE_URL}${caminho}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    })
  } catch (e) {
    // fetch so rejeita quando nao consegue falar com o servidor
    throw new Error('Não foi possível conectar ao servidor')
  }

  // 204 (exclusao) nao tem corpo na resposta
  const dados = response.status === 204 ? null : await response.json()

  // fetch nao rejeita em 400, 401, 404... a verificacao e nossa
  if (!response.ok) {
    if (response.status === 401 && token && aoExpirarSessao) {
      aoExpirarSessao()
    }

    const erro = new Error(dados?.erro || 'Erro inesperado')
    erro.status = response.status
    throw erro
  }

  return dados
}
