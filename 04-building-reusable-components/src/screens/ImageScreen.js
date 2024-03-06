import React from 'react'
import { View, StyleSheet } from 'react-native'
// Importing the new component
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  // Array with the images references
  const imageSources = [
    require('../../assets/img/beach.jpg'),
    require('../../assets/img/forest.jpg'),
    require('../../assets/img/mountain.jpg')
  ]

  return (
    <View>
      <ImageDetail title="Forest" imageSource={imageSources[0]} />
      <ImageDetail title="Beach" imageSource={imageSources[1]} />
      <ImageDetail title="Mountain" imageSource={imageSources[2]} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen