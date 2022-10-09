import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>
            <Button
                style={styles.mainButton}
                onPress={() => { navigation.navigate('Box') }}
                title="Go to Box Screen" />
            <Button
                style={styles.mainButton}
                onPress={() => { navigation.navigate('FlexBox') }}
                title="Go to FlexBox Screen" />
            <Button
                style={styles.mainButton}
                onPress={() => { navigation.navigate('Position') }}
                title="Go to Position Screen" />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        padding: 10
    },
    mainButton: {
        marginBottom: 5
    }
})

export default HomeScreen