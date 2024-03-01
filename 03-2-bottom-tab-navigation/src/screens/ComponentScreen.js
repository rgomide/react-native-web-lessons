// PART 1 - IMPORT LIBRARIES
import React from 'react'; // importing entire library
import { Text, StyleSheet, View } from 'react-native'; // importing some piees of react-native

// PART 2 - CREATE A COMPONENT 
// A FUNCTION THAT RETURNS SOME JSX
const ComponentsScreen = () => {
  const greeting = 'Hi there!'
  const componentAsVariable = <Text>Hello to you!</Text>

  return (
    <View>
      <Text style={styles.textStyle}>this is the components screen</Text>
      <Text>{greeting}</Text>
      {componentAsVariable}
    </View>
  )
}

// PART 3 CREATE A STYLESHEET TO STYLE OUR COMPONENT
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 36,
    color: 'red'
  }
})

// PART 4 - EXPORT THE COMPONENT SO WE CAN USE IT ELSEWHERE IN OUR PROJECT
export default ComponentsScreen



