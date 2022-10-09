import React from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'

const FlexBoxScreen = () => {
    return (
        <ScrollView style={styles.mainView}>
            <Text style={styles.textTitle}>alignItems: 'stretch'</Text>
            <View style={styles.viewStyleStrech}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>alignItems: 'flex-start'</Text>
            <View style={styles.viewStyleFlexStart}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>alignItems: 'center'</Text>
            <View style={styles.viewStyleCenter}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>alignItems: 'flex-end'</Text>
            <View style={styles.viewStyleFlexEnd}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>flexDirection: 'row' and alignItems: 'center'</Text>
            <View style={styles.viewStyleRow}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>flexDirection: 'column' and justifyContent: 'space-evenly'</Text>
            <View style={styles.viewStyleJustifyContent}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={styles.textStyle}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>flexDirection: 'column' and children with flex property</Text>
            <View style={styles.viewStyleJustifyContent}>
                <Text style={[styles.textStyle, styles.flexOne]}>Child #1 screen</Text>
                <Text style={[styles.textStyle, styles.flexOne]}>Child #2 screen</Text>
                <Text style={[styles.textStyle, styles.flexTwo]}>Child #3 screen</Text>
            </View>
            <Text style={styles.textTitle}>alignSelf: 'center' for the second element</Text>
            <View style={styles.viewStyleStrech}>
                <Text style={styles.textStyle}>Child #1 screen</Text>
                <Text style={[styles.textStyle, styles.alignSelfCenter]}>Child #2 screen</Text>
                <Text style={styles.textStyle}>Child #3 screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: 5
    },
    textTitle: {
        fontWeight: 'bold',
        marginVertical: 10
    },
    viewStyleStrech: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'stretch'
    },
    viewStyleFlexStart: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-start'
    },
    viewStyleCenter: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'center'
    },
    viewStyleFlexEnd: {
        borderWidth: 3,
        borderColor: 'black',
        alignItems: 'flex-end'
    },
    viewStyleRow: {
        borderWidth: 3,
        flexDirection: 'row',
        height: 200,
        alignItems: 'center'
    },
    viewStyleJustifyContent: {
        borderWidth: 3,
        height: 200,
        justifyContent: 'space-evenly'
    },
    flexOne: {
        flex: 1
    },
    flexTwo: {
        flex: 2
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
})

export default FlexBoxScreen