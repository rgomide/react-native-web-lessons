import React from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'

const HomeScreen = (props) => {
  console.log(props)
  const navigation = props.navigation

  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button
        onPress={() => {
          console.log('button pressed')
          navigation.navigate('Components')
        }}
        title="Go to Components Demo" />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPressIn={() => console.log('pressable pressed in')}
        onPressOut={() => console.log('pressable pressed out')}
        onLongPress={() => console.log('pressable long pressed')}
        onPress={() => {
          console.log('pressable pressed')
          navigation.navigate('List', { name: 'Denecley' })
        }}>
        <Text style={styles.buttonText}>Go to List Demo</Text>
        <Text style={styles.buttonSubText}>This is my Pressable component</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  buttonSubText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonPressed: {
    backgroundColor: 'red',
    borderColor: 'red',
    opacity: 0.5
  }
})

export default HomeScreen