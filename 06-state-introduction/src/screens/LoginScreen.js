import React from "react"
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.mainView}>
            <Text>User</Text>
            <TextInput style={styles.input} />
            <Text>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button title="Sign in" />
            <Text>mensagem de status...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 5,
        backgroundColor: 'rgb(200, 200, 200)'
    },
    input: {
        borderWidth: 1,
        height: 35,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    }
})

export default LoginScreen