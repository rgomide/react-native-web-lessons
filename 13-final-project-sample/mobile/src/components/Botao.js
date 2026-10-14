import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bordas, cores, espacos, fontes } from '../styles/theme'

// variante: 'primaria' (fundo azul), 'secundaria' (contorno) ou 'perigo' (vermelho)
const Botao = ({ titulo, onPress, variante = 'primaria', icone, carregando = false }) => {
  const corTexto = variante === 'secundaria' ? cores.primaria : cores.superficie

  return (
    <Pressable
      onPress={onPress}
      disabled={carregando}
      style={({ pressed }) => [
        styles.botao,
        styles[variante],
        (pressed || carregando) && styles.inativo
      ]}
    >
      {carregando
        ? <ActivityIndicator color={corTexto} />
        : icone && <Ionicons name={icone} size={18} color={corTexto} />}
      <Text style={[styles.texto, { color: corTexto }]}>{titulo}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: espacos.pequeno,
    paddingVertical: 12,
    paddingHorizontal: espacos.medio,
    borderRadius: bordas.raio,
    borderWidth: 1
  },
  primaria: {
    backgroundColor: cores.primaria,
    borderColor: cores.primaria
  },
  secundaria: {
    backgroundColor: cores.superficie,
    borderColor: cores.primaria
  },
  perigo: {
    backgroundColor: cores.erro,
    borderColor: cores.erro
  },
  inativo: {
    opacity: 0.6
  },
  texto: {
    fontSize: fontes.normal,
    fontWeight: 'bold'
  }
})

export default Botao
