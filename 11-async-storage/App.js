import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [value, setValue] = useState('')

  const clear = async () => {
    await AsyncStorage.clear()
  }

  const save = async (key, value) => {
    await AsyncStorage.setItem(key, value)
  }

  const load = async (key) => {
    return await AsyncStorage.getItem(key)
  }

  // useEffect to clear storage when load and close App
  useEffect(() => {
    clear()
    return () => {
      clear()
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Let's test AsyncStorage</Text>
        <Button
          title="Save"
          onPress={() => {
            save('someKey', 'some value!')
          }} />
        <Button
          title="Load"
          onPress={async () => {
            const valueFromStorage = await load('someKey')
            setValue(valueFromStorage)
          }} />
        <Button
          title="Clear"
          onPress={async () => {
            await clear()
            const valueFromStorage = await load('someKey')
            setValue(valueFromStorage)
          }} />
        <Text>{value}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  innerContainer: {
    width: '100%',
    gap: 5
  }
})
