import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SimpleStyleScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum cupiditate recusandae omnis non, praesentium sint obcaecati consectetur ipsa,
        necessitatibus enim a quaerat magnam quam assumenda maxime ducimus nobis ut quisquam.
      </Text>
    </View>
  )
}

export default SimpleStyleScreen