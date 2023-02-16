import React from 'react'
import { View, Button } from 'react-native'

const SummaryScreen = ({ navigation }) => {
  return (
    <View>
      <Button title='Simple Style Screen' onPress={() => navigation.navigate('SimpleStyle')} />
      <Button title='Complex Style Screen' onPress={() => navigation.navigate('ComplexStyle')} />
    </View>
  )
}

export default SummaryScreen