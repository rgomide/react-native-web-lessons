import { View, Text, Button } from 'react-native'

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main screen</Text>
      <Button title='Abrir Menu' onPress={() => navigation.openDrawer()}/>
    </View>
  );
}

export default MainScreen