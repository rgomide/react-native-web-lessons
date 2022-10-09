import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import BoxScreen from './src/screens/BoxScreen'
import FlexBoxScreen from './src/screens/FlexBoxScreen'
import PositionScreen from './src/screens/PositionScreen'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
        <Stack.Screen name="FlexBox" component={FlexBoxScreen} />
        <Stack.Screen name="Position" component={PositionScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}