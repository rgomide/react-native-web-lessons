import React from 'react'
// IMPORT FlatList
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  // CREATE AN ARRAY OF OBJECTS
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' }
  ]

  return (
    <FlatList
      data={friends} // THIS FlatList WILL INTERATE ALL ELEMENTS OF friends
      renderItem={(element) => {
        // element === { item: { name: 'Friend #1' }, index: 0 }
        return <Text>{element.item.name}</Text>
      }} />
  )
}

const styles = StyleSheet.create({})

export default ListScreen