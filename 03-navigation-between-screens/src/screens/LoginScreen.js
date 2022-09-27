import React from 'react'
import { View, Button } from 'react-native'

const LoginScreen = (props) => {
    const navigation = props.navigation
    return (
        <View>
            <Button title="Home" onPress={
                () => { navigation.navigate('Home') }
            } />
            <Button title="Sobre" onPress={
                () => { navigation.navigate('About') }
            } />
            <Button title="Detalhes do Usuário" onPress={
                () => { navigation.navigate('UserDetails') }
            } />
        </View>
    )
}

export default LoginScreen