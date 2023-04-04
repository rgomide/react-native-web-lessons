import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, View, Image, Text, FlatList, TextInput } from 'react-native'
import { getCharacter, getNextCharacterPage } from '../../component/api/rick-and-morty'

const CharsEffectScreen = (props) => {
  const [fetchResult, setFetchResult] = useState({ pageInfo: {}, characters: [] })
  const [nameSearch, setNameSearch] = useState('')

  async function fetchData(name = '') {
    try {
      const { data: { info, results } } = await getCharacter({ name: name })
      setFetchResult({ pageInfo: info, characters: results })
    } catch (error) {
      setFetchResult({ pageInfo: {}, characters: [] })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData(nameSearch)
  }, [nameSearch])

  return (
    <View style={styles.mainView}>
      <TextInput
        style={[styles.textInput, styles.marginVertical]}
        onChangeText={setNameSearch}
        value={nameSearch}
      />
      <FlatList
        style={styles.marginVertical}
        data={fetchResult.characters}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { name, status, image } }) => {
          return (
            <View style={styles.characterContainer}>
              <Image style={styles.characterImage} source={{ uri: image }} />
              <View >
                <Text>{name}</Text>
                <Text>{status}</Text>
              </View>
            </View>
          )
        }}
      />
      <Button
        title="Load More..."
        disabled={!fetchResult.pageInfo.next}
        onPress={async () => {
          const currentResults = fetchResult.characters
          const { data: { info, results } } = await getNextCharacterPage(fetchResult.pageInfo.next)
          setFetchResult({ pageInfo: info, characters: [...currentResults, ...results] })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white'
  },
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  characterImage: {
    width: 90,
    height: 90,
    marginRight: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    height: 35,
    padding: 5
  },
  marginVertical: {
    marginVertical: 5
  }
})

export default CharsEffectScreen