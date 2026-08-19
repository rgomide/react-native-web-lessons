import React, { useEffect, useState } from 'react'
import { StyleSheet, Button, View, Image, Text, FlatList, TextInput } from 'react-native'
import { getCharacter, getNextCharacterPage } from '../../component/api/rick-and-morty'

const CharsEffectScreen = () => {
  const [fetchResult, setFetchResult] = useState({ pageInfo: {}, characters: [] })
  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {
    // "ignore" avoids a race condition: if the user types again before the
    // previous request finishes, the cleanup function marks the old request as
    // outdated so its response can no longer overwrite the newest one.
    let ignore = false

    const fetchData = async () => {
      try {
        const { info, results } = await getCharacter({ name: nameSearch })
        if (!ignore) {
          setFetchResult({ pageInfo: info, characters: results })
        }
      } catch (error) {
        if (!ignore) {
          setFetchResult({ pageInfo: {}, characters: [] })
        }
      }
    }

    fetchData()

    return () => {
      ignore = true
    }
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
        keyExtractor={({ id }) => String(id)}
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
          const { info, results } = await getNextCharacterPage(fetchResult.pageInfo.next)
          setFetchResult((current) => ({
            pageInfo: info,
            characters: [...current.characters, ...results]
          }))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
