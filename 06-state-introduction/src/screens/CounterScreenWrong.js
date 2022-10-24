import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreenWrong = () => {
    // todo: fix this!!!
    let counter = 0
    return (
        <View style={styles.viewStyle}>
            <View style={styles.buttonStyle}>
                <Button title="Increase" onPress={() => {
                    counter++
                    console.log(counter)
                }} />
            </View>
            <View style={styles.buttonStyle}>
                <Button title="Decrease" onPress={() => {
                    counter--
                    console.log(counter)
                }} />
            </View>
            <Text style={styles.textCounter}>Counter: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 5
    },
    buttonStyle: {
        marginVertical: 2
    },
    textCounter: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }

})

export default CounterScreenWrong