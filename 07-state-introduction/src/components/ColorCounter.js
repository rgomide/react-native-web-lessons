import React from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'

const ColorCounter = (props) => {
  const colorName = props.color
  return (
    <View style={styles.marginVertical}>
      <Text>{colorName}</Text>
      <View style={styles.marginVertical}>
        <Button
          onPress={() => props.onIncrease()}
          title={`Increase ${colorName}`}
        />
      </View>
      <View style={styles.marginVertical}>
        <Button
          onPress={() => props.onDecrease()}
          title={`Decrease ${colorName}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  marginVertical: {
    marginVertical: 2
  }
})

export default ColorCounter



