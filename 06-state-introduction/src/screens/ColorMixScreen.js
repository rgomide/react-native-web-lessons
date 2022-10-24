import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const ColorMixScreen = () => {
    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    const rgbValue = `rgb(${red}, ${green}, ${blue})`

    return (
        <View style={styles.mainView}>
            <ColorCounter
                onIncrease={() => setColor(red, COLOR_INCREMENT, setRed)}
                onDecrease={() => setColor(red, -1 * COLOR_INCREMENT, setRed)}
                color='Red'
            />
            <ColorCounter
                onIncrease={() => setColor(green, COLOR_INCREMENT, setGreen)}
                onDecrease={() => setColor(green, -1 * COLOR_INCREMENT, setGreen)}
                color='Green'
            />
            <ColorCounter
                onIncrease={() => setColor(blue, COLOR_INCREMENT, setBlue)}
                onDecrease={() => setColor(blue, -1 * COLOR_INCREMENT, setBlue)}
                color='Blue'
            />
            <View style={[styles.colorView, { backgroundColor: rgbValue }]} >
                <Text>{rgbValue}</Text>
            </View>
        </View>
    )
}

const setColor = (value, adjustment, setColorState) => {
    if ((value + adjustment <= 255) && (value + adjustment >= 0)) {
        setColorState(value + adjustment)
    }
}

const styles = StyleSheet.create({
    mainView: {
        padding: 10
    },
    colorView: {
        marginTop: 10,
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ColorMixScreen