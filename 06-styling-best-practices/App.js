import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SimpleStyleScreen from './src/screens/simple-style'
import SummaryScreen from './src/screens/summary'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Summary">
        <Stack.Screen name="Summary" component={SummaryScreen} />
        <Stack.Screen name="SimpleStyle" component={SimpleStyleScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}