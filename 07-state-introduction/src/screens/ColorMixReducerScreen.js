// We need to import useReducer
import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

// function that manages state
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'red' || 'green' || 'blue', payload: 15 || -15 }
  const { type, payload } = action
  const currentColorValue = state[type]

  if (currentColorValue + payload <= 255 && currentColorValue + payload >= 0) {
    const newState = { ...state }
    newState[type] = currentColorValue + payload
    return newState
  } else {
    return state
  }
}

const ColorMixReducerScreen = () => {
  // starting our reducer
  const [state, dispatch] = useReducer(reducer, { red: 255, green: 255, blue: 255 })

  const { red, green, blue } = state
  const rgbValue = `rgb(${red}, ${green}, ${blue})`

  return (
    <View style={styles.mainView}>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })}
        color='Blue'
      />
      <View style={[styles.colorView, { backgroundColor: rgbValue }]} >
        <Text>{rgbValue}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    padding: 10
  },
  colorView: {
    marginTop: 10,
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ColorMixReducerScreen