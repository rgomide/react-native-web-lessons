import { ScrollView, Text, StyleSheet, View } from "react-native";
import CharacterCard from "../components/CharacterCard";

const CharactersScreen = (props) => {
  const { charactersData } = props.route.params;

  const info = charactersData.info;
  const characters = charactersData.results;

  console.log(charactersData);

  return (
    <ScrollView style={styles.mainContainer}>

      <View style={styles.summaryContainer}>
        <Text>Total characters: {info.count}</Text>

        <View style={styles.charactersContainer}>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    gap: 10
  },
  summaryContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  charactersContainer: {
    flexDirection: 'column',
    gap: 10,
  },
});

export default CharactersScreen;