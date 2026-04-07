import { StyleSheet, Text, View } from "react-native";

const CharacterCard = (props) => {
  const { character } = props;
  return (
    <View style={styles.container}>
      <Text>{character.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default CharacterCard;