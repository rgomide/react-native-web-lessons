import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

const ColorScreen = () => {
    return (
        <View style={styles.mainView}>
            <Button title='Add a color' />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 10
    }
})

export default ColorScreen