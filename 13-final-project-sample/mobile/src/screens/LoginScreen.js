import { useContext, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '../contexts/AuthContext'
import Botao from '../components/Botao'
import Campo from '../components/Campo'
import MensagemErro from '../components/MensagemErro'
import { cores, espacos, fontes } from '../styles/theme'

// Frames 00 - Login e 00b - Login (erro)
const LoginScreen = ({ navigation }) => {
  const { entrar } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  // clicar em "Entrar" -> POST /auth/login
  const onEntrarPress = async () => {
    if (!email.trim() || !senha) {
      setErro('Informe e-mail e senha')
      return
    }

    setErro('')
    setEnviando(true)

    try {
      // Com o token salvo, o App.js troca automaticamente para a tela Tarefas
      await entrar(email.trim(), senha)
    } catch (e) {
      setErro(e.message)
      setEnviando(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Ionicons name="checkmark-done-circle" size={64} color={cores.primaria} />
        <Text style={styles.titulo}>Tarefas e Anotações</Text>
        <Text style={styles.subtitulo}>Entre para ver suas tarefas</Text>
      </View>

      <Campo
        rotulo="E-mail"
        placeholder="seu@email.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Campo
        rotulo="Senha"
        placeholder="Sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <MensagemErro mensagem={erro} />

      <Botao titulo="Entrar" icone="log-in-outline" onPress={onEntrarPress} carregando={enviando} />

      <Pressable onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: espacos.medio,
    padding: espacos.grande,
    backgroundColor: cores.fundo
  },
  cabecalho: {
    alignItems: 'center',
    gap: 4,
    marginBottom: espacos.medio
  },
  titulo: {
    fontSize: fontes.titulo,
    fontWeight: 'bold',
    color: cores.texto
  },
  subtitulo: {
    fontSize: fontes.normal,
    color: cores.textoSecundario
  },
  link: {
    textAlign: 'center',
    color: cores.primaria,
    fontSize: fontes.normal
  }
})

export default LoginScreen
