import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAsyncStorage, AsyncStorageError } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('lessons')

export default function App() {
  const [value, setValue] = useState('')

  const clear = async () => {
    await storage.clear()
  }

  const save = async (key, value) => {
    await storage.setItem(key, value)
  }

  const load = async (key) => {
    return await storage.getItem(key)
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Let's test AsyncStorage</Text>
        <Button
          title="Save"
          onPress={async () => {
            const user = {
              id: 1,
              name: 'Denecley'
            }

            const arrayOfUsers = [
              {
                id: 1,
                name: 'John'
              },
              {
                id: 2,
                name: 'Doe'
              }
            ]

            await save('user', JSON.stringify(user))
            await storage.setMany({
              users: JSON.stringify(arrayOfUsers),
              someKey: 'some value!'
            })
          }} />
        <Button
          title="Load"
          onPress={async () => {
            try {
              const userFromStorage = await load('user')
              const entries = await storage.getMany(['users', 'someKey'])

              const user = JSON.parse(userFromStorage)
              const users = JSON.parse(entries.users)

              setValue(user.name + '\n' + users[0].name + '\n' + users[1].name + '\n' + entries.someKey)
            } catch (error) {
              if (error instanceof AsyncStorageError) {
                setValue(error.type + ': ' + error.errorMessage)
              } else {
                setValue(String(error))
              }
            }
          }} />
        <Button
          title="Keys"
          onPress={async () => {
            const keys = await storage.getAllKeys()
            setValue(keys.join('\n'))
          }} />
        <Button
          title="Clear"
          onPress={async () => {
            await clear()
            const valueFromStorage = await load('someKey')
            setValue(String(valueFromStorage))
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
