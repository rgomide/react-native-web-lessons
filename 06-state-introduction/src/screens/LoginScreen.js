import React, { useState } from "react"
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

const LoginScreen = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <View style={styles.mainView}>
            <Text style={styles.authText}>User</Text>
            <TextInput style={styles.input} />
            <Text style={styles.authText}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button title="Sign in" />
            <Text style={styles.statusText}>mensagem de status...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 15,
        backgroundColor: 'rgb(220, 220, 220)',
        height: '100%'
    },
    authText: {
        fontSize: 20
    },
    statusText: {
        fontSize: 25,
        marginTop: 50,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    input: {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: 'white',
        height: 35,
        paddingHorizontal: 15,
        marginVertical: 10
    }
})

export default LoginScreen