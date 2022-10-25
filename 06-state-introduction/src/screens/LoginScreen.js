import React from "react"
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <View>
            <Text>User</Text>
            <TextInput />
            <Text>Password</Text>
            <TextInput secureTextEntry={true} />
            <Button title="Sign in" />
            <Text>mensagem de status...</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default LoginScreen