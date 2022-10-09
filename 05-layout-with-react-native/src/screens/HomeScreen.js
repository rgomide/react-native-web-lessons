import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>
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

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        padding: 10
    }
})

export default HomeScreen