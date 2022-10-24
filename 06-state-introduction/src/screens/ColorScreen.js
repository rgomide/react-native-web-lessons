import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])

    return (
        <View style={styles.mainView}>
            <Button title='Add a color' onPress={() => {
                setColors([...colors, randomRgb()])
            }} />
            <FlatList
                data={colors}
                keyExtractor={(item) => item}
                renderItem={(element) => {
                    const randomColorStyle = {
                        backgroundColor: element.item
                    }

                    return (
                        <View style={styles.viewColorContainer}>
                            <View style={[styles.viewColor, randomColorStyle]}></View>
                            <Text>{element.item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
    mainView: {
        padding: 10
    },
    viewColorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewColor: {
        width: 100,
        height: 50,
        borderWidth: 1,
        marginRight: 5,
        marginVertical: 5
    }
})

export default ColorScreen