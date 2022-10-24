import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import StateWrong from './src/screens/StateWrong'
import StateIntroduction from './src/screens/StateIntroduction'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StateWrong" component={StateWrong} />
        <Stack.Screen name="StateIntroduction" component={StateIntroduction} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}