# Navegação entre telas
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [Descrição do projeto](#descrição-do-projeto)
- [Tipos de botão](#tipos-de-botão)
- [Button em ação](#button-em-ação)
- [TouchableOpacity em ação](#touchableopacity-em-ação)
- [Navegando com React Navigation](#navegando-com-react-navigation)
- [Passagem de parâmetros durante a navegação](#passagem-de-parâmetros-durante-a-navegação)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Neste tópico aprenderemos como navegar entre telas.

## Descrição do projeto

Neste projeto nós temos a tela principal chamada `Home Screen` no qual possui dois botões. Cada botão direcionará a navegação para telas diferentes conforme mostrado na Figura abaixo:

<img src="../assets/2022-09-16-10-50-15.png" width="600"/>

## Tipos de botão

No `React Native` nós podemos utilizar dois tipos de botões.

<img src="../assets/2022-09-16-10-57-13.png" width="600"/>

`Button` é um componente mais simples que permite que os desenvolvedores configure uma ação de um botão. Porém, o componente `TouchableOpacity` permite a configuração de uma área clicável dentro do componente.

Nas próximas seções nós utilizaremos cada tipo de butão para compararmos a complexidade e o grau de customização de cada um deles.

## `Button` em ação

Nós utilizaremos o componente `Button` para representar o primeiro elemento da tela [Home](src/screens/HomeScreen.js).

Lembre-se de que o componente `Button` é uma `tag` com auto fechamento e o texto do botão é definido pela prop `title`. Além disso, a ação de pressionamento é tratada pela prop `onPress`.

## TouchableOpacity em ação

O componente `TouchableOpacity` é um componente que identifica ações de clique em elementos internos. Logo, esse componente não é uma tag de auto fechamento. Esse é o motivo no qual caracterizamos esse componente sendo de alto grau de customização, Nós podemos utilizar a nossa criatividade para criar componentes clicáveis. 

## Navegando com React Navigation

De acordo com a imagem a seguir, nós precisamos criar um objeto `Stack Navigator` no qual enviamos `props` para as telas.

<img src="../assets/2022-09-16-11-37-07.png" width="600"/>

Ele pode ser configurado no [App.js](App.js) dentro do elemento `<NavigationContainer>`. Primeiramente nós definimos o objeto `Stack` e dentro do elemento `<NavigationContainer>`, adicionamos as referências de cada tela a partir do elemento `<Stack.Screen>`.

Você pode utilizar a prop `initialRouteName` do elemento `Stack.Navigator` para configurar a tela principal da sua aplicação.

O componente `HomeScreen` contém um novo atributo na sua `prop` referente aos elementos de navegação.

## Passagem de parâmetros durante a navegação

Para enviar parâmetros durante a navegação, podemos informar um segundo parâmetro para a função `navigate`. Esse parâmetro é um objeto que será acessado pelo componente destinatário.

A ação de enviar o parâmetro é feita no componente [HomeScreen](./src/screens/HomeScreen.js#L20):

```js
navigation.navigate('List', { name: 'Denecley' })
```

Nós conseguimos acessar o parâmetro enviado durante a navegação no componente destinatário a partir da prop `route` conforme mostrado em [ListScreen](./src/screens/ListScreen.js#L6).

```js
console.log(props.route.params)
```

## Exercício

Crie um novo projeto com 4 telas:

- Login 
- Home
- User Details
- About

A tela principal deve ser a `LoginScreen` e a image a seguir mostra a estrutura dos componentes com os detalhes de navegação:

<img src="../assets/2022-09-16-13-51-52.png" width="600"/>

Pesquise sobre a definição de estilos para melhorarmos a experiência do usuário.

## Referências

- [Documentação do componente Button](https://reactnative.dev/docs/button)
- [Documentação do componente TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [Componente React Navigation](https://reactnavigation.org/docs/getting-started)
- [Passagem de parâmetros para as rotas](https://reactnavigation.org/docs/params)