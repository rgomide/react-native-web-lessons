import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'

const MapScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.buttonView}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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

export default MapScreen