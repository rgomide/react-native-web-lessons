import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Image')
                }}
                title="Go to Image Screen" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
})

export default HomeScreen