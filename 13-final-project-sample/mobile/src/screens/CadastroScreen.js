import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { cadastrar } from '../services/auth.service'
import Botao from '../components/Botao'
import Campo from '../components/Campo'
import MensagemErro from '../components/MensagemErro'
import { cores, espacos } from '../styles/theme'

// Frames 01 - Cadastro e 01b - Cadastro (erro)
const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  // clicar em "Cadastrar" -> POST /auth/register
  const onCadastrarPress = async () => {
    if (!nome.trim() || !email.trim() || !senha) {
      setErro('Informe nome, e-mail e senha')
      return
    }

    setErro('')
    setEnviando(true)

    try {
      await cadastrar({ nome: nome.trim(), email: email.trim(), senha })
      Toast.show({ type: 'success', text1: 'Conta criada!', text2: 'Agora é só entrar.' })
      navigation.goBack()
    } catch (e) {
      setErro(e.message)
      setEnviando(false)
    }
  }

  return (
    <View style={styles.container}>
      <Campo rotulo="Nome" placeholder="Seu nome" value={nome} onChangeText={setNome} />
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
        placeholder="Crie uma senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <MensagemErro mensagem={erro} />

      <Botao titulo="Cadastrar" icone="person-add-outline" onPress={onCadastrarPress} carregando={enviando} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: espacos.medio,
    padding: espacos.grande,
    backgroundColor: cores.fundo
  }
})

export default CadastroScreen
