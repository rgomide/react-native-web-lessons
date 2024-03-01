import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DetailsScreen from "./DetailsScreen"
import SettingsScreen from "./SettingsScreen"

const SettingsStack = createNativeStackNavigator()

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackScreen