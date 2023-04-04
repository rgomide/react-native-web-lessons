import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.buttonView}>
        <Button
          onPress={() => { navigation.navigate('EffectIntroduction') }}
          title="Go to Effect Introduction" />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => { navigation.navigate('MainChars') }}
          title="Go to Main Chars" />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={() => { navigation.navigate('CharsEffect') }}
          title="Go to Main Chars With Effect" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    padding: 10
  },
  buttonView: {
    marginVertical: 2
  }
})

export default MenuScreen