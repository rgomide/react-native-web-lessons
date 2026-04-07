import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = (props) => {
  const navigation = props.navigation;

  const onShowCharactersPress = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await response.json();

    navigation.navigate('Characters', { charactersData: characters });
  };

  const onShowCalculatorPress = () => {
    navigation.navigate('Calculator');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Show Characters" onPress={onShowCharactersPress} />
      <Button title="Calculator" onPress={onShowCalculatorPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;