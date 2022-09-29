import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} style={styles.thumbImage} />
            <Text>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    thumbImage: {
        width: 50,
        height: 50
    }
})

export default ImageDetail