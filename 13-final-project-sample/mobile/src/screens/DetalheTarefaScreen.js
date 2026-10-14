import { useCallback, useContext, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { AuthContext } from '../contexts/AuthContext'
import { buscarTarefa, excluirTarefa } from '../services/tarefa.service'
import { criarAnotacao, excluirAnotacao, listarAnotacoes } from '../services/anotacao.service'
import AnotacaoItem from '../components/AnotacaoItem'
import Botao from '../components/Botao'
import Campo from '../components/Campo'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'
import { bordas, cores, espacos, fontes } from '../styles/theme'

// Frames 04 - Detalhe da Tarefa e 04b - Detalhe da Tarefa (sem anotações)
const DetalheTarefaScreen = ({ navigation, route }) => {
  const { id } = route.params
  const { token } = useContext(AuthContext)
  const [tarefa, setTarefa] = useState(null)
  const [anotacoes, setAnotacoes] = useState([])
  const [texto, setTexto] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [erroAnotacao, setErroAnotacao] = useState('')
  const [enviando, setEnviando] = useState(false)

  // "ao abrir a tela" -> GET /tarefas/:id e GET /tarefas/:id/anotacoes
  // (tambem ao voltar da tela de edicao, para mostrar os dados alterados)
  useFocusEffect(
    useCallback(() => {
      Promise.all([buscarTarefa(token, id), listarAnotacoes(token, id)])
        .then(([tarefaApi, anotacoesApi]) => {
          setTarefa(tarefaApi)
          setAnotacoes(anotacoesApi)
          setErro('')
        })
        .catch((e) => setErro(e.message))
        .finally(() => setCarregando(false))
    }, [token, id])
  )

  // clicar em "Excluir tarefa" -> DELETE /tarefas/:id
  const onExcluirTarefaPress = async () => {
    try {
      await excluirTarefa(token, id)
      Toast.show({ type: 'success', text1: 'Tarefa excluída' })
      navigation.goBack()
    } catch (e) {
      setErro(e.message)
    }
  }

  // clicar em "Adicionar" -> POST /tarefas/:id/anotacoes
  const onAdicionarPress = async () => {
    if (!texto.trim()) {
      setErroAnotacao('Escreva o texto da anotação')
      return
    }

    setErroAnotacao('')
    setEnviando(true)

    try {
      const nova = await criarAnotacao(token, id, texto)
      setAnotacoes((atuais) => [nova, ...atuais])
      setTexto('')
    } catch (e) {
      setErroAnotacao(e.message)
    } finally {
      setEnviando(false)
    }
  }

  // clicar na lixeira -> DELETE /anotacoes/:id
  const onExcluirAnotacao = async (anotacao) => {
    try {
      await excluirAnotacao(token, anotacao.id)
      setAnotacoes((atuais) => atuais.filter((a) => a.id !== anotacao.id))
    } catch (e) {
      Toast.show({ type: 'error', text1: e.message })
    }
  }

  if (carregando) return <Carregando />

  // Erro ao carregar (ex.: 404 tarefa nao encontrada)
  if (!tarefa) {
    return (
      <View style={styles.container}>
        <MensagemErro mensagem={erro} />
        <Botao titulo="Voltar" variante="secundaria" onPress={() => navigation.goBack()} />
      </View>
    )
  }

  // Dados da tarefa e formulario da anotacao ficam no cabecalho da FlatList
  const cabecalho = (
    <View style={styles.cabecalho}>
      <View style={styles.cartao}>
        <Text style={[styles.status, tarefa.concluida && styles.statusConcluida]}>
          {tarefa.concluida ? 'Concluída' : 'Pendente'}
        </Text>
        <Text style={styles.titulo}>{tarefa.titulo}</Text>
        <Text style={styles.descricao}>{tarefa.descricao || 'Sem descrição'}</Text>
      </View>

      <MensagemErro mensagem={erro} />

      <View style={styles.acoes}>
        <View style={styles.acao}>
          <Botao
            titulo="Editar"
            icone="create-outline"
            variante="secundaria"
            onPress={() => navigation.navigate('FormularioTarefa', { tarefa })}
          />
        </View>
        <View style={styles.acao}>
          <Botao
            titulo="Excluir tarefa"
            icone="trash-outline"
            variante="perigo"
            onPress={onExcluirTarefaPress}
          />
        </View>
      </View>

      <Text style={styles.secao}>Anotações</Text>
      <Campo placeholder="Escreva uma anotação" value={texto} onChangeText={setTexto} />
      <MensagemErro mensagem={erroAnotacao} />
      <Botao titulo="Adicionar" icone="add" onPress={onAdicionarPress} carregando={enviando} />
    </View>
  )

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.lista}
      data={anotacoes}
      keyExtractor={(item) => String(item.id)}
      ListHeaderComponent={cabecalho}
      ListEmptyComponent={<Text style={styles.vazia}>Nenhuma anotação para esta tarefa</Text>}
      renderItem={({ item }) => (
        <AnotacaoItem anotacao={item} onExcluir={() => onExcluirAnotacao(item)} />
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: espacos.medio,
    padding: espacos.medio,
    backgroundColor: cores.fundo
  },
  lista: {
    gap: espacos.pequeno
  },
  cabecalho: {
    gap: espacos.medio,
    marginBottom: espacos.pequeno
  },
  cartao: {
    gap: espacos.pequeno,
    padding: espacos.medio,
    borderRadius: bordas.raio,
    backgroundColor: cores.superficie
  },
  status: {
    alignSelf: 'flex-start',
    paddingHorizontal: espacos.pequeno,
    paddingVertical: 2,
    borderRadius: bordas.raio,
    overflow: 'hidden',
    fontSize: fontes.pequena,
    fontWeight: 'bold',
    color: cores.primaria,
    backgroundColor: cores.primariaClara
  },
  statusConcluida: {
    color: cores.superficie,
    backgroundColor: cores.sucesso
  },
  titulo: {
    fontSize: fontes.titulo,
    fontWeight: 'bold',
    color: cores.texto
  },
  descricao: {
    fontSize: fontes.normal,
    color: cores.textoSecundario
  },
  acoes: {
    flexDirection: 'row',
    gap: espacos.pequeno
  },
  acao: {
    flex: 1
  },
  secao: {
    marginTop: espacos.pequeno,
    fontSize: fontes.grande,
    fontWeight: 'bold',
    color: cores.texto
  },
  vazia: {
    textAlign: 'center',
    padding: espacos.medio,
    color: cores.textoSecundario,
    fontSize: fontes.normal
  }
})

export default DetalheTarefaScreen
