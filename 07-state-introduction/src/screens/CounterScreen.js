import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  console.log('componente carregado')
  console.log('novo valor de counter', counter)

  return (
    <View style={styles.viewStyle}>
      <View style={styles.buttonStyle}>
        <Button title="Increase" onPress={() => {
          const novoValor = counter + 1
          setCounter(novoValor)
          console.log(novoValor)
        }} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Decrease" onPress={() => {
          setCounter(counter - 1)
          console.log(counter)
        }} />
      </View>
      <Text style={styles.textCounter}>Counter: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 5
  },
  buttonStyle: {
    marginVertical: 2
  },
  textCounter: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }

})

export default CounterScreen