import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const ComplexStyleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Title</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum cupiditate recusandae omnis non, praesentium sint obcaecati consectetur ipsa,
          necessitatibus enim a quaerat magnam quam assumenda maxime ducimus nobis ut quisquam.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Second Section</Text>
        <Text style={styles.paragraph}>
          Harum cupiditate recusandae omnis non.
        </Text>
      </View>
    </View>
  )
}

export default ComplexStyleScreen