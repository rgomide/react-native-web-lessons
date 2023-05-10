import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [value, setValue] = useState('')
  return (
    <View style={styles.container}>
      <Text>Let's test AsyncStorage</Text>
      <Button
        title="Save"
        onPress={async () => {
          await save('key', 'some value!')
        }}>Save</Button>
      <Button
        title="Load"
        onPress={async () => {
          setValue(await load('key'))
        }}>Load</Button>
      <Text>{value}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

async function save(key, value) {
  await AsyncStorage.setItem(key, value)
}

async function load(key) {
  return AsyncStorage.getItem(key)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
