import { createContext, useEffect, useState } from 'react'
import { createAsyncStorage } from '@react-native-async-storage/async-storage'
import { login } from '../services/auth.service'
import { definirAoExpirarSessao } from '../services/api'

const storage = createAsyncStorage('tarefas-anotacoes')

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  // true enquanto o token salvo esta sendo lido do AsyncStorage
  const [iniciando, setIniciando] = useState(true)

  const sair = async () => {
    await storage.removeItem('token')
    setToken(null)
  }

  useEffect(() => {
    // Qualquer 401 em rota protegida encerra a sessao e volta ao login
    definirAoExpirarSessao(sair)

    storage.getItem('token')
      .then(setToken)
      .finally(() => setIniciando(false))
  }, [])

  // Somente o token e guardado. A senha nunca e armazenada.
  const entrar = async (email, senha) => {
    const dados = await login(email, senha)
    await storage.setItem('token', dados.token)
    setToken(dados.token)
  }

  return (
    <AuthContext value={{ token, iniciando, entrar, sair }}>
      {children}
    </AuthContext>
  )
}
