import { StyleSheet, Text, TextInput, View } from 'react-native'
import { bordas, cores, espacos, fontes } from '../styles/theme'

// Rotulo + TextInput. As demais props (value, onChangeText, secureTextEntry...)
// sao repassadas para o TextInput.
const Campo = ({ rotulo, multiline = false, ...props }) => {
  return (
    <View style={styles.container}>
      {rotulo && <Text style={styles.rotulo}>{rotulo}</Text>}
      <TextInput
        style={[styles.input, multiline && styles.multilinha]}
        placeholderTextColor={cores.textoSecundario}
        multiline={multiline}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4
  },
  rotulo: {
    fontSize: fontes.pequena,
    fontWeight: 'bold',
    color: cores.texto
  },
  input: {
    backgroundColor: cores.superficie,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: bordas.raio,
    paddingHorizontal: espacos.medio,
    paddingVertical: 10,
    fontSize: fontes.normal,
    color: cores.texto
  },
  multilinha: {
    minHeight: 96,
    textAlignVertical: 'top'
  }
})

export default Campo
