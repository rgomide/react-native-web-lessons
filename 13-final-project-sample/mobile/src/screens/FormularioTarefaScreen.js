import { useContext, useLayoutEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { AuthContext } from '../contexts/AuthContext'
import { alterarTarefa, criarTarefa } from '../services/tarefa.service'
import Botao from '../components/Botao'
import Campo from '../components/Campo'
import MensagemErro from '../components/MensagemErro'
import { cores, espacos } from '../styles/theme'

// Frames 03 - Formulário de Tarefa e 03b - Formulário de Tarefa (erro).
// Sem parametros: cadastra uma nova tarefa.
// Com route.params.tarefa (vindo do Detalhe): altera a tarefa existente.
const FormularioTarefaScreen = ({ navigation, route }) => {
  const { token } = useContext(AuthContext)
  const tarefa = route.params?.tarefa
  const [titulo, setTitulo] = useState(tarefa?.titulo ?? '')
  const [descricao, setDescricao] = useState(tarefa?.descricao ?? '')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({ title: tarefa ? 'Editar tarefa' : 'Nova tarefa' })
  }, [navigation, tarefa])

  // clicar em "Salvar" -> POST /tarefas (nova) ou PUT /tarefas/:id (edicao)
  const onSalvarPress = async () => {
    if (!titulo.trim()) {
      setErro('Informe o título da tarefa')
      return
    }

    setErro('')
    setEnviando(true)

    try {
      if (tarefa) {
        await alterarTarefa(token, tarefa.id, {
          titulo,
          descricao,
          concluida: tarefa.concluida
        })
      } else {
        await criarTarefa(token, { titulo, descricao })
      }

      Toast.show({ type: 'success', text1: 'Tarefa salva' })
      navigation.goBack()
    } catch (e) {
      setErro(e.message)
      setEnviando(false)
    }
  }

  return (
    <View style={styles.container}>
      <Campo
        rotulo="Título"
        placeholder="Ex.: Estudar para a prova"
        value={titulo}
        onChangeText={setTitulo}
        maxLength={120}
      />
      <Campo
        rotulo="Descrição (opcional)"
        placeholder="Detalhes da tarefa"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <MensagemErro mensagem={erro} />

      <Botao titulo="Salvar" icone="save-outline" onPress={onSalvarPress} carregando={enviando} />
      <Botao titulo="Cancelar" variante="secundaria" onPress={() => navigation.goBack()} />
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

export default FormularioTarefaScreen
