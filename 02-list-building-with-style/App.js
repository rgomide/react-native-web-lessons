import { View, StatusBar } from 'react-native'
import ListScreen from './src/screens/ListScreen';

export default function App() {
  return (
    <View>
      <ListScreen></ListScreen>
      <StatusBar style="auto"/>
    </View>
  );
}
