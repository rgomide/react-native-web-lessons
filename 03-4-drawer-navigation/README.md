# Navegação por gaveta

- [Introdução](#introdução)
- [Definindo o esquema de navegação](#definindo-o-esquema-de-navegação)
- [Navegação em cascata](#navegação-em-cascata)
- [Expandindo o menu programaticamente](#expandindo-o-menu-programaticamente)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Neste projeto analisaremos o uso de vários componentes de navegação por gaveta. Como pré-requisito, precisamos adicionar as bibliotecas `@react-navigation/drawer`, `react-native-gesture-handler` e `react-native-reanimated`.`

## Definindo o esquema de navegação

A configuração do esquema de navegação é semelhante aos demais esquemas (`Stack` e `Tab`). A diferença é que nós temos que importar a função `createDrawerNavigator` do pacote `@react-navigation/drawer` conforme mostrado no arquivo [App.js](./App.js#L2)

```js
import { createDrawerNavigator } from '@react-navigation/drawer';
```

Dessa forma podemos definir uma variável `Drawer` que percence ao `NavigationContainer`.

## Navegação em cascata

A aplicação deste projeto de exemplo apresenta um esquema de navegação aninhado, no qual temos a seguinte estrutura:

- NavigationContainer (`Drawer`)
  - MainScreen
  - HomeStackScreen (`Stack`)
    - HomeScreen
    - DetailsScreen
  - SettingsStackScreen (`Stack`)
    - SettingsScreen
    - DetailsScreen

Na documentação oficial há um [tópico específico](https://reactnavigation.org/docs/nesting-navigators/) que determina as boas práticas para a organização do esquema de navegação de aplicações com estruturas complexas.

O menu de navegação do componente [SettingsStackScreen](./src/screens/SettingsStackScreen.js#L9) foi marcado como invisível. Isso evita que os menus de navegação fiquem sobrepostos.

## Expandindo o menu programaticamente

Podemos executar alguns métodos referentes prop `navigation` que podem controlar o menu. O método `openDrawer()` é um deles. Esse método força a abertura do menu sem que o usuário clique no menu sanduíche. Esse comando é mostrado no componente [MainScreen.js](./src/screens/MainScreen.js#L7).

Consulte a seção [Helpers](https://reactnavigation.org/docs/drawer-navigator#helpers) para verificar as funções que podem ser chamadas a partir do prop `navigation`.

## Exercício



## Referências

- [Navegação por gaveta](https://reactnavigation.org/docs/drawer-navigator)
- [Navigators em cascata](https://reactnavigation.org/docs/nesting-navigators/)