import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bordas, cores, espacos, fontes } from '../styles/theme'

const formatarData = (iso) => new Date(iso).toLocaleString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})

const AnotacaoItem = ({ anotacao, onExcluir }) => {
  return (
    <View style={styles.item}>
      <View style={styles.textos}>
        <Text style={styles.texto}>{anotacao.texto}</Text>
        <Text style={styles.data}>{formatarData(anotacao.data_cadastro)}</Text>
      </View>

      <Pressable onPress={onExcluir} hitSlop={8} accessibilityLabel="Excluir anotação">
        <Ionicons name="trash-outline" size={20} color={cores.erro} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espacos.medio,
    padding: espacos.medio,
    borderRadius: bordas.raio,
    borderLeftWidth: 4,
    borderLeftColor: cores.primaria,
    backgroundColor: cores.superficie
  },
  textos: {
    flex: 1,
    gap: 2
  },
  texto: {
    fontSize: fontes.normal,
    color: cores.texto
  },
  data: {
    fontSize: fontes.pequena,
    color: cores.textoSecundario
  }
})

export default AnotacaoItem
