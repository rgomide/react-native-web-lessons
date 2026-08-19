import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MenuScreen from './src/screens/MenuScreen'
import ThemeScreen from './src/screens/ThemeScreen'
import { ThemeProvider } from './src/contexts/ThemeContext'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // The provider is at the top of the tree, so EVERY screen can read and
    // update the theme, not only the screen that declares it.
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Theme" component={ThemeScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  )
}
