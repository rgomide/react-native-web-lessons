import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>
            <Text>Test!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        padding: 10
    }
})

export default HomeScreen