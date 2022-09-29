import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const imageSources = [
        require('../../assets/img/beach.jpg'),
        require('../../assets/img/forest.jpg'),
        require('../../assets/img/mountain.jpg')
    ]

    return (<View>
        <ImageDetail title="Forest" imageSource={imageSources[0]} />
        <ImageDetail title="Beach" imageSource={imageSources[1]} />
        <ImageDetail title="Mountain" imageSource={imageSources[2]} />
    </View>)
}

const styles = StyleSheet.create({})

export default ImageScreen