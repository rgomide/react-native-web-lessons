import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bordas, cores, espacos, fontes } from '../styles/theme'

// Nao renderiza nada quando nao ha mensagem
const MensagemErro = ({ mensagem }) => {
  if (!mensagem) return null

  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle" size={18} color={cores.erro} />
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: espacos.pequeno,
    padding: espacos.pequeno,
    borderRadius: bordas.raio,
    backgroundColor: cores.erroFundo
  },
  texto: {
    flex: 1,
    color: cores.erro,
    fontSize: fontes.pequena
  }
})

export default MensagemErro
