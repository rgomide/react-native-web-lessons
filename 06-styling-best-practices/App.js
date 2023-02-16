import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ComplexStyleScreen from './src/screens/complex-style'
import SimpleStyleScreen from './src/screens/simple-style'
import SummaryScreen from './src/screens/summary'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'slide_from_left', animationDuration: 200}} initialRouteName="Summary">
        <Stack.Screen name="Summary" options={{animation: 'slide_from_left'}} component={SummaryScreen} />
        <Stack.Screen name="SimpleStyle" component={SimpleStyleScreen} />
        <Stack.Screen name="ComplexStyle" component={ComplexStyleScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}