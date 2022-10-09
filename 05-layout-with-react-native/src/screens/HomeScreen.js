import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View>
            <Button
                onPress={() => { navigation.navigate('Box') }}
                title="Go to Box Screen" />
            <Button
                onPress={() => { navigation.navigate('FlexBox') }}
                title="Go to FlexBox Screen" />
            <Button
                onPress={() => { navigation.navigate('Position') }}
                title="Go to Position Screen" />
        </View>
    )
}

export default HomeScreen