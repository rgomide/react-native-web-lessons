import React, { useState } from 'react'
import { StyleSheet, Button, View, Image, Text, FlatList, TextInput } from 'react-native'
import { getCharacter, getNextCharacterPage } from '../component/api/RickAndMortyApi'

const HomeScreen = (props) => {
  const [characters, setCharacters] = useState([])
  const [pageInfo, setPageInfo] = useState({})
  const [nameSearch, setNameSearch] = useState('')

  return (
    <View style={styles.mainView}>
      <TextInput
        style={[styles.textInput, styles.marginVertical]}
        onChangeText={setNameSearch}
        value={nameSearch}
      />
      <Button
        title="Load Characters"
        onPress={async () => {
          try {
            const chars = await getCharacter({
              name: nameSearch
            })

            setPageInfo(chars.data.info)
            setCharacters(chars.data.results)
          } catch (error) {
            setPageInfo({})
            setCharacters([])
          }
        }}
      />
      <FlatList
        style={styles.marginVertical}
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={(element) => {
          const character = element.item

          return (
            <View style={styles.characterContainer}>
              <Image style={styles.characterImage} source={{ uri: character.image }} />
              <View >
                <Text>{character.name}</Text>
                <Text>{character.status}</Text>
              </View>
            </View>
          )
        }}
      />
      <Button
        title="Load More..."
        disabled={!pageInfo.next}
        onPress={async () => {
          const chars = await getNextCharacterPage(pageInfo.next)

          setPageInfo(chars.data.info)
          setCharacters([...characters, ...chars.data.results])
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

export default HomeScreen