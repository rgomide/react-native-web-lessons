import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './src/screens/HomeScreen'
import CounterScreenWrong from './src/screens/CounterScreenWrong'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import ColorMixScreen from './src/screens/ColorMixScreen'
import ColorMixReducerScreen from './src/screens/ColorMixReducerScreen'
import LoginScreen from './src/screens/LoginScreen'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CounterScreenWrong" component={CounterScreenWrong} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="ColorMixScreen" component={ColorMixScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ColorMixReducerScreen" component={ColorMixReducerScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}