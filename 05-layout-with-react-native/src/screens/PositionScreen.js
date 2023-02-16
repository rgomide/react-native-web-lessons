import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PositionScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box screen</Text>
      <Text style={[styles.textStyle, styles.positionAbsolute, styles.topTen]}>Box screen</Text>
      <Text style={styles.textStyle}>Box screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red'
  },
  positionAbsolute: {
    position: 'absolute'
  },
  topTen: {
    top: 10
  }
})

export default PositionScreen