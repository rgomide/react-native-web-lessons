import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ListScreen from './src/screens/ListScreen';
import ListScreenKeyManually from './src/screens/ListScreenKeyManually';
import ListScreenKeyExtractor from './src/screens/ListScreenKeyExtractor';
import ListScreenStyled from './src/screens/ListScreenStyled';

export default function App() {
  return (
    <View>
      <Text style={styles.textStyle}>A simple FlatList</Text>
      <ListScreen />
      <Text style={styles.textStyle}>List screen key manually</Text>
      <ListScreenKeyManually />
      <Text style={styles.textStyle}>List screen with keyExtractor</Text>
      <ListScreenKeyExtractor />
      <Text style={styles.textStyle}>Styled list screen</Text>
      <ListScreenStyled />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5
  }
})