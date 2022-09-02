import React from 'react'
// IMPORT FlatList
import { Text, StyleSheet, FlatList, View } from 'react-native'

const ListScreenKeyManually = () => {
    // CREATE AN ARRAY OF OBJECTS WITH key PROPERTY
    const friends = [
        { name: 'Friend #1', key: '1' },
        { name: 'Friend #2', key: '2' },
        { name: 'Friend #3', key: '3' },
        { name: 'Friend #4', key: '4' },
        { name: 'Friend #5', key: '5' },
        { name: 'Friend #6', key: '6' },
        { name: 'Friend #7', key: '7' },
        { name: 'Friend #8', key: '8' },
        { name: 'Friend #9', key: '9' }
    ]

    return (
        <View>
            <FlatList
                data={friends}
                renderItem={
                    (element) => {
                        // element === { item: { name: 'Friend #1', key: '1' }, index: 0 }
                        return <Text>{element.item.name}</Text>
                    }
                } />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ListScreenKeyManually