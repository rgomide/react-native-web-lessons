# Navegação entre telas
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [Descrição do projeto](#descrição-do-projeto)
- [Tipos de botão](#tipos-de-botão)
- [Button em ação](#button-em-ação)
- [TouchableOpacity em ação](#touchableopacity-em-ação)
- [Navegando com React Navigation](#navegando-com-react-navigation)
- [Exercício](#exercício)

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

The `TouchableOpacity` is a component that identifies pressing actions for the inner elements. So it's not a self closing element. That's the reason we defined it as a highly customizable component, we can use our creativity to create custom pressable components. 

## Navegando com React Navigation

According to image below, we need to create a `Stack Navigator` object which can pass props to the screens.

![](../assets/2022-09-16-11-37-07.png)

It can be configured in [App.js](App.js) inside the `<NavigationContainer>` element. We created the `Stack` const and inside `<NavigationContainer>`, we added each screen reference using the `<Stack.Screen>` element.

You can use the `initialRouteName` prop of the `Stack.Navigator` element to set up the main screen of your application.

The `HomeScreen` function contains a new argument related to that `prop` received from navigation.

## Exercício

Create a new project with 4 screens:

- Login 
- Home
- User Details
- About

The main screen should be the Login screen and the image below shows the mockup of this project with navigation details:

![](../assets/2022-09-16-13-51-52.png)

Styling your screens is strongly recommended to improve the user interface.

## Reference

- [Button documentation](https://reactnative.dev/docs/button)
- [TouchableOpacity documentation](https://reactnative.dev/docs/touchableopacity)
- [React Navigation component](https://reactnavigation.org/docs/getting-started)
