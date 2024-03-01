import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="List" component={ListScreen} options={{ title: 'Componente List' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}