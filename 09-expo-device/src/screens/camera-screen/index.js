import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera'

const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [type, setType] = useState(CameraType.back);

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text>No access to camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} onBarCodeScanned={() => console.log('barcooode')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setType((currentType) => (currentType === CameraType.back) ? CameraType.front : CameraType.back)
        }}>
        <Text style={styles.text}> Toggle Camera </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    height: 80,
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
})

export default CameraScreen