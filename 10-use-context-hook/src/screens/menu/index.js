import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const MenuScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.buttonView}>
        <Button
          onPress={() => { navigation.navigate('Theme') }}
          title="Go to Theme" />
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