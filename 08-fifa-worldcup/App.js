import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MenuScreen from './src/screens/MenuScreen'
import GroupScreen from './src/screens/GroupScreen'
import TeamDetailScreen from './src/screens/TeamDetailScreen'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Menu">
				<Stack.Screen name="Menu" options={{ title: 'Copa do Mundo 2022' }} component={MenuScreen} />
				<Stack.Screen name="Group" options={{ title: 'Tabela de Grupos' }} component={GroupScreen} />
				<Stack.Screen name="TeamDetail" options={{ title: 'Detalhes' }} component={TeamDetailScreen} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	)
}