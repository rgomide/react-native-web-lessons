import { StatusBar } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => {
            return <FontAwesome name='home' size={20} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarBadge: 2
        }} />
        <Tab.Screen name="Components" component={ComponentsScreen} />
        <Tab.Screen name="List" component={ListScreen} options={{ title: 'Componente List' }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}