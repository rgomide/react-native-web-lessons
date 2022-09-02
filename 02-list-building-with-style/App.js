import { View, Text, StatusBar } from 'react-native'
import ListScreen from './src/screens/ListScreen';
import ListScreenKeyManually from './src/screens/ListScreenKeyManually';
import ListScreenKeyExtractor from './src/screens/ListScreenKeyExtractor';
import ListScreenStyled from './src/screens/ListScreenStyled';

export default function App() {
  return (
    <View>
      <Text>A simple FlatList</Text>
      <ListScreen/>
      <Text>List screen key manually</Text>
      <ListScreenKeyManually/>
      <Text>List screen with keyExtractor</Text>
      <ListScreenKeyExtractor/>
      <Text>Styled list screen</Text>
      <ListScreenStyled/>
      <StatusBar style="auto" />
    </View>
  );
}