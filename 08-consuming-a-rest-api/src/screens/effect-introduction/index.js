import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

const EffectIntroductionScreen = ({ navigation }) => {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('INSIDE useEffect WITH EMPTY ARRAY')
    return () => {
      console.log('CLEANUP FUNCTION FOR EMPTY ARRAY')
    }
  }, [])

  useEffect(() => {
    console.log('INSIDE useEffect FOR counter STATE')
    return () => {
      console.log('CLEANUP FUNCTION FOR counter STATE')
    }
  }, [counter])

  console.log('COMPONENT RENDERING')

  return (
    <View style={styles.mainView}>
      <View style={styles.buttonView}>
        <Button
          onPress={() => {
            console.log('INCREMENT COUNTER CLICK')
            setCounter(counter + 1)
          }}
          title="Increment Counter" />
        <Text>{counter}</Text>
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

export default EffectIntroductionScreen