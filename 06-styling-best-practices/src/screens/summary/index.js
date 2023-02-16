import React from 'react'
import { View, Button } from 'react-native'
import styles from './styles'

const SummaryScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Button title='Simple Style Screen' onPress={() => navigation.navigate('SimpleStyle')} />
      <Button title='Complex Style Screen' onPress={() => navigation.navigate('ComplexStyle')} />
    </View>
  )
}

export default SummaryScreen