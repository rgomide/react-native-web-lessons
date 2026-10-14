import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { cores, espacos, fontes } from '../styles/theme'

const Carregando = ({ mensagem = 'Carregando...' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={cores.primaria} />
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: espacos.pequeno,
    backgroundColor: cores.fundo
  },
  texto: {
    color: cores.textoSecundario,
    fontSize: fontes.normal
  }
})

export default Carregando
