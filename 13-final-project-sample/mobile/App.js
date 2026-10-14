import { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import { AuthContext, AuthProvider } from './src/contexts/AuthContext'
import Carregando from './src/components/Carregando'
import LoginScreen from './src/screens/LoginScreen'
import CadastroScreen from './src/screens/CadastroScreen'
import TarefasScreen from './src/screens/TarefasScreen'
import FormularioTarefaScreen from './src/screens/FormularioTarefaScreen'
import DetalheTarefaScreen from './src/screens/DetalheTarefaScreen'
import { cores } from './src/styles/theme'

const Stack = createNativeStackNavigator()

const opcoesCabecalho = {
  headerStyle: { backgroundColor: cores.superficie },
  headerTintColor: cores.primaria,
  headerTitleStyle: { color: cores.texto }
}

// Sem token: somente Login e Cadastro existem.
// Com token: somente as telas protegidas existem.
const Rotas = () => {
  const { token, iniciando } = useContext(AuthContext)

  if (iniciando) return <Carregando />

  return (
    <Stack.Navigator screenOptions={opcoesCabecalho}>
      {token ? (
        <>
          <Stack.Screen name="Tarefas" component={TarefasScreen} options={{ title: 'Minhas tarefas' }} />
          <Stack.Screen name="DetalheTarefa" component={DetalheTarefaScreen} options={{ title: 'Tarefa' }} />
          <Stack.Screen name="FormularioTarefa" component={FormularioTarefaScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Criar conta' }} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
      <StatusBar style="auto" />
      <Toast />
    </AuthProvider>
  )
}
