import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bordas, cores, espacos, fontes } from '../styles/theme'

// onPress: abre a tarefa | onAlternar: marca/desmarca como concluida
const TarefaCard = ({ tarefa, onPress, onAlternar }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Pressable onPress={onAlternar} hitSlop={8}>
        <Ionicons
          name={tarefa.concluida ? 'checkbox' : 'square-outline'}
          size={26}
          color={tarefa.concluida ? cores.sucesso : cores.textoSecundario}
        />
      </Pressable>

      <View style={styles.textos}>
        <Text style={[styles.titulo, tarefa.concluida && styles.concluida]}>
          {tarefa.titulo}
        </Text>
        {!!tarefa.descricao && (
          <Text style={styles.descricao} numberOfLines={1}>
            {tarefa.descricao}
          </Text>
        )}
      </View>

      <Ionicons name="chevron-forward" size={20} color={cores.textoSecundario} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espacos.medio,
    padding: espacos.medio,
    borderRadius: bordas.raio,
    backgroundColor: cores.superficie
  },
  textos: {
    flex: 1,
    gap: 2
  },
  titulo: {
    fontSize: fontes.normal,
    fontWeight: 'bold',
    color: cores.texto
  },
  concluida: {
    color: cores.textoSecundario,
    textDecorationLine: 'line-through'
  },
  descricao: {
    fontSize: fontes.pequena,
    color: cores.textoSecundario
  }
})

export default TarefaCard
