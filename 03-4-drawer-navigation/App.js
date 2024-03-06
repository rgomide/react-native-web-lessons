import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStackScreen from './src/screens/HomeStackScreen'
import SettingsStackScreen from './src/screens/SettingsStackScreen'
import MainScreen from './src/screens/MainScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
        <Drawer.Screen name="SettingsStack" component={SettingsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
