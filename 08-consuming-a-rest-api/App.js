import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import CharsEffectScreen from './src/screens/chars-effect'
import MenuScreen from './src/screens/menu'
import EffectIntroductionScreen from './src/screens/effect-introduction'
import MainCharsScreen from './src/screens/main-chars'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="EffectIntroduction" component={EffectIntroductionScreen} />
        <Stack.Screen name="MainChars" component={MainCharsScreen} />
        <Stack.Screen name="CharsEffect" component={CharsEffectScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}