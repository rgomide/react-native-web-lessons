import { useCallback, useContext, useLayoutEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'
import { AuthContext } from '../contexts/AuthContext'
import { alterarTarefa, listarTarefas } from '../services/tarefa.service'
import Botao from '../components/Botao'
import Carregando from '../components/Carregando'
import MensagemErro from '../components/MensagemErro'
import TarefaCard from '../components/TarefaCard'
import { cores, espacos, fontes } from '../styles/theme'

// Frames 02 - Tarefas, 02b - Tarefas (vazia) e 02c - Tarefas (carregando)
const TarefasScreen = ({ navigation }) => {
  const { token, sair } = useContext(AuthContext)
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [atualizando, setAtualizando] = useState(false)
  const [erro, setErro] = useState('')

  // Botao "Sair" no cabecalho da tela
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={sair} style={styles.sair}>
          <Ionicons name="log-out-outline" size={20} color={cores.erro} />
          <Text style={styles.sairTexto}>Sair</Text>
        </Pressable>
      )
    })
  }, [navigation])

  // GET /tarefas
  const carregarTarefas = async () => {
    try {
      setErro('')
      setTarefas(await listarTarefas(token))
    } catch (e) {
      setErro(e.message)
    } finally {
      setCarregando(false)
      setAtualizando(false)
    }
  }

  // "ao abrir a tela": useFocusEffect roda na primeira abertura e tambem
  // quando o usuario volta para esta tela (depois de cadastrar, editar ou
  // excluir), mantendo a lista sempre atualizada
  useFocusEffect(
    useCallback(() => {
      carregarTarefas()
    }, [token])
  )

  // "arrastar para atualizar"
  const onRefresh = () => {
    setAtualizando(true)
    carregarTarefas()
  }

  // "clicar na caixa de selecao" -> PUT /tarefas/:id
  const onAlternar = async (tarefa) => {
    try {
      const alterada = await alterarTarefa(token, tarefa.id, {
        ...tarefa,
        concluida: !tarefa.concluida
      })
      setTarefas((atuais) => atuais.map((t) => (t.id === alterada.id ? alterada : t)))
    } catch (e) {
      Toast.show({ type: 'error', text1: e.message })
    }
  }

  if (carregando) return <Carregando mensagem="Carregando tarefas..." />

  return (
    <View style={styles.container}>
      <MensagemErro mensagem={erro} />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.lista}
        refreshing={atualizando}
        onRefresh={onRefresh}
        ListEmptyComponent={
          <View style={styles.vazia}>
            <Ionicons name="clipboard-outline" size={56} color={cores.textoSecundario} />
            <Text style={styles.vaziaTitulo}>Nenhuma tarefa cadastrada</Text>
            <Text style={styles.vaziaTexto}>Toque em "Nova tarefa" para começar</Text>
          </View>
        }
        renderItem={({ item }) => (
          <TarefaCard
            tarefa={item}
            onPress={() => navigation.navigate('DetalheTarefa', { id: item.id })}
            onAlternar={() => onAlternar(item)}
          />
        )}
      />

      <Botao
        titulo="Nova tarefa"
        icone="add"
        onPress={() => navigation.navigate('FormularioTarefa')}
      />
    </View>
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
    flexGrow: 1,
    gap: espacos.pequeno
  },
  vazia: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: espacos.pequeno
  },
  vaziaTitulo: {
    fontSize: fontes.grande,
    fontWeight: 'bold',
    color: cores.texto
  },
  vaziaTexto: {
    fontSize: fontes.normal,
    color: cores.textoSecundario
  },
  sair: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: espacos.pequeno
  },
  sairTexto: {
    color: cores.erro,
    fontSize: fontes.normal,
    fontWeight: 'bold'
  }
})

export default TarefasScreen
