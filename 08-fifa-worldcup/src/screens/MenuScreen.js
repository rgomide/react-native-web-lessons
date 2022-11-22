import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

const MenuScreen = (props) => {
    const navigation = props.navigation
    return (
        <View>
            <Button
                title='Abrir tabela de grupos'
                onPress={() => {
                    navigation.navigate('Group')
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default MenuScreen