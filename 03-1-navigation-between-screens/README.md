# Navegação entre telas
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [Descrição do projeto](#descrição-do-projeto)
- [Tipos de botão](#tipos-de-botão)
  - [Button em ação](#button-em-ação)
  - [Pressable em ação](#pressable-em-ação)
- [Navegando com React Navigation](#navegando-com-react-navigation)
- [Passagem de parâmetros durante a navegação](#passagem-de-parâmetros-durante-a-navegação)
- [Exercício](#exercício)
- [Solução de problemas comuns](#solução-de-problemas-comuns)
- [Glossário](#glossário)
- [Referências](#referências)

## Introdução

Neste tópico aprenderemos como navegar entre telas em uma aplicação React Native. A navegação é um conceito fundamental em aplicativos móveis, permitindo que o usuário se mova entre diferentes interfaces e funcionalidades.

## Descrição do projeto

Neste projeto nós temos a tela principal chamada `Home Screen` no qual possui dois botões. Cada botão direcionará a navegação para telas diferentes conforme mostrado na Figura abaixo:

```
┌─────────────────────────────────┐
│               App               │
├─────────────────────────────────┤
│                                 │
│  ┌─────────────────────────┐    │    ┌───────────────────────────┐
│  │ Go to Components Demo   │────┼───►│ Navigate user to the      │
│  └─────────────────────────┘    │    │ 'ComponentsScreen'        │
│                                 │    └───────────────────────────┘
│  ┌─────────────────────────┐    │    ┌───────────────────────────┐
│  │ Go to List Demo         │────┼───►│ Navigate user to the      │
│  └─────────────────────────┘    │    │ 'ListScreen'              │
│                                 │    └───────────────────────────┘
└─────────────────────────────────┘
```

O fluxo de navegação do aplicativo é o seguinte:

```
Home Screen
   |
   |----> Components Screen (utilizando Button)
   |
   |----> List Screen (utilizando Pressable, com parâmetros)
```

## Tipos de botão

No `React Native` nós podemos utilizar dois tipos de botões.

```
+-------------------------------------------------------+
|           Botões com React Native                     |
+-------------------------------------------------------+

+-------------------+      +----------------------------------+
|                   |      |                                  |
|      Button       |----->| Componente muito simples para    |
|                   |      | mostrar um botão e detectar      |
+-------------------+      | um pressionamento                |
                           |                                  |
                           +----------------------------------+

+-------------------+      +----------------------------------+
|                   |      |                                  |
|    Pressable      |----->| Componente moderno e flexível    |
|                   |      | com mais estados de interação    |
+-------------------+      | e opções de personalização       |
                           |                                  |
                           +----------------------------------+
```

`Button` é um componente mais simples que permite que os desenvolvedores configure uma ação de um botão. Porém, o componente `Pressable` permite a configuração de uma área clicável dentro do componente.

Nas próximas seções nós utilizaremos cada tipo de butão para compararmos a complexidade e o grau de customização de cada um deles.

### `Button` em ação

Nós utilizaremos o componente `Button` para representar o primeiro elemento da tela [Home](src/screens/HomeScreen.js).

Lembre-se de que o componente `Button` é uma `tag` com auto fechamento e o texto do botão é definido pela prop `title`. Além disso, a ação de pressionamento é tratada pela prop `onPress`.

Exemplo de uso do Button:

```js
<Button
  title="Clique aqui"           // Texto exibido no botão
  onPress={() => {              // Função executada ao clicar
    console.log('Botão clicado') // Mensagem de depuração no console
    // Ações a serem executadas
  }}
  color="blue"                  // Cor do botão (opcional)
/>
```

### `Pressable` em ação

O componente `Pressable` é um componente que identifica ações de clique em elementos internos. Logo, esse componente não é uma tag de auto fechamento. Esse é o motivo no qual caracterizamos esse componente sendo de alto grau de customização. Nós podemos utilizar a nossa criatividade para criar componentes clicáveis.

Exemplo básico do Pressable:

```js
<Pressable
  style={styles.button}         // Estilo do componente (definido separadamente)
  onPress={() => {              // Ação ao clicar
    console.log('Pressionado')  // Mensagem de depuração
    // Ações a serem executadas
  }}
>
  <Text style={styles.buttonText}>Pressione aqui</Text>
</Pressable>
```

#### Eventos de pressionamento

O componente `Pressable` possui diversos eventos de pressionamento que permitem criar interações mais ricas:

1. **onPress**: Disparado quando o usuário clica e solta o componente.
```js
<Pressable onPress={() => console.log('Pressionado')}>
  <Text>Pressione-me</Text>
</Pressable>
```

2. **onLongPress**: Disparado quando o usuário mantém o pressionamento por alguns segundos.
```js
<Pressable 
  onPress={() => console.log('Pressionado')}
  onLongPress={() => console.log('Pressionamento longo')}
>
  <Text>Pressione e segure</Text>
</Pressable>
```

3. **Feedback visual**: É possível alterar a aparência durante o pressionamento.
```js
<Pressable 
  style={({ pressed }) => [
    styles.button,
    pressed && styles.buttonPressed // Aplica estilo adicional quando pressionado
  ]}
  onPress={() => console.log('Pressionado')}
>
  <Text>Pressione para ver o efeito</Text>
</Pressable>
```

Além disso, o componente `Pressable` possui eventos relacionados aos estágios de pressionamento. Veja a [documentação](https://reactnative.dev/docs/pressable#how-it-works) para maiores detalhes.

## Navegando com React Navigation

### O que é React Navigation?

React Navigation é uma biblioteca popular para implementar navegação em aplicações React Native. Ela permite criar diferentes tipos de navegação como pilha (stack), tabs, drawer e muito mais.

### Instalação

Para utilizar o React Navigation, primeiro você precisa instalá-lo:

```bash
npm install @react-navigation/native

# Dependências para React Native
npm install react-native-screens react-native-safe-area-context

# Para navegação em pilha (stack)
npm install @react-navigation/native-stack
```

### Configuração básica

De acordo com a imagem a seguir, nós precisamos criar um objeto `Stack Navigator` no qual enviamos `props` para as telas.

<p align="center">
  <img src="../assets/2022-09-16-11-37-07.png" width="600"/>
</p>

Ele pode ser configurado no [App.js](App.js) dentro do elemento `<NavigationContainer>`. Primeiramente nós definimos o objeto `Stack` e dentro do elemento `<NavigationContainer>`, adicionamos as referências de cada tela a partir do elemento `<Stack.Screen>`.

Exemplo de configuração:

```js
// Importações necessárias
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentScreen'

// Criação do objeto Stack
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>  {/* Container principal de navegação */}
      <Stack.Navigator initialRouteName="Home"> {/* Define a tela inicial */}
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Definição de uma tela */}
        <Stack.Screen name="Components" component={ComponentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

Você pode utilizar a prop `initialRouteName` do elemento `Stack.Navigator` para configurar a tela principal da sua aplicação.

O componente `HomeScreen` recebe automaticamente uma prop chamada `navigation` que contém métodos para navegar entre as telas.

## Passagem de parâmetros durante a navegação

Para enviar parâmetros durante a navegação, podemos informar um segundo parâmetro para a função `navigate`. Esse parâmetro é um objeto que será acessado pelo componente destinatário.

### Enviando parâmetros

A ação de enviar o parâmetro é feita no componente [HomeScreen](./src/screens/HomeScreen.js#L20):

```js
// O segundo parâmetro é um objeto com os dados que queremos passar
navigation.navigate('List', { name: 'Denecley', id: 123, isAdmin: true })
```

### Recebendo e utilizando parâmetros

Nós conseguimos acessar o parâmetro enviado durante a navegação no componente destinatário a partir da prop `route` conforme mostrado em [ListScreen](./src/screens/ListScreen.js#L6).

```js
// Acessando os parâmetros recebidos
const ListScreen = (props) => {
  // Depuração: mostra os parâmetros no console
  console.log(props.route.params)
  
  // Extraindo valores específicos
  const { name, id, isAdmin } = props.route.params
  
  // Utilizando os parâmetros na interface
  return (
    <View>
      <Text>Bem-vindo, {name}!</Text>
      <Text>ID do usuário: {id}</Text>
      {isAdmin && <Text>Usuário administrador</Text>}
      
      {/* Resto do componente... */}
    </View>
  )
}
```

## Exercício

Crie um novo projeto com 4 telas:

- Login 
- Home
- User Details
- About

A tela principal deve ser a `LoginScreen` e a image a seguir mostra a estrutura dos componentes com os detalhes de navegação:

<p align="center">
  <img src="../assets/2022-09-16-13-51-52.png" width="600"/>
</p>

Pesquise sobre a definição de estilos para melhorarmos a experiência do usuário.

## Referências

- [Documentação do componente Button](https://reactnative.dev/docs/button)
- [Documentação do componente Pressable](https://reactnative.dev/docs/pressable)
- [Objeto options](https://reactnavigation.org/docs/native-stack-navigator/#options)
- [Componente React Navigation](https://reactnavigation.org/docs/getting-started)
- [Passagem de parâmetros para as rotas](https://reactnavigation.org/docs/params)