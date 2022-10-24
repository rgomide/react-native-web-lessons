import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>
            <View style={styles.buttonView}>
                <Button
                    onPress={() => { navigation.navigate('CounterScreenWrong') }}
                    title="Go to Counter Screen Wrong" />
            </View>
            <View style={styles.buttonView}>
                <Button
                    onPress={() => { navigation.navigate('CounterScreen') }}
                    title="Go to Counter Screen" />
            </View>
            <View style={styles.buttonView}>
                <Button
                    onPress={() => { navigation.navigate('ColorScreen') }}
                    title="Go to Color Screen" />
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

export default HomeScreen