// We need to import useReducer
import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

// function that manages state
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  const { colorToChange, amount } = action
  const currentColorValue = state[colorToChange]

  if (currentColorValue + amount <= 255 && currentColorValue + amount >= 0) {
    const newState = { ...state }
    newState[colorToChange] = currentColorValue + amount
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
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color='Green'
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
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