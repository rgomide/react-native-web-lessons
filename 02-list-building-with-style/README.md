# Criando listas com estilo
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [O elemento FlatList](#o-elemento-flatlist)
- [Por que atribuir a propriedade key?](#por-que-atribuir-a-propriedade-key)
- [Resolvendo o problema da propriedade key](#resolvendo-o-problema-da-propriedade-key)
- [Props importantes para o FlatList](#props-importantes-para-o-flatlist)
- [Exercício](#exercício)
- [Referência](#referência)

## Introdução

Neste projeto veremos como construir listas utilizando o elemento `FlatList`. Verifique o arquivo [ListScreen.js](./src/screens/ListScreen.js) para mais detalhes.

## O elemento `FlatList`

- Transforma um array em uma lista de elementos
- Nós precisamos passar o atributo `data` como um `prop` - o array `data` será utilizado para criar o conjunto de elementos
- Também é necessário informar o `prop` `renderItem` - é uma função que transforma cada elemento do array em um elemento do `FlatItem`
- Se você é acostumado a trabalhar com React para web, o procedimento mais comum é realizar uma operação `map` para transformar umas lista de objetos em uma lista de componentes. Em React Native, é mais aconselhado utilizar o elemento `FlatList` para esse propósito

<img src="../assets/2022-09-01-19-59-40.png" width="500"/>

## Por que atribuir a propriedade `key`?

Se nós modificarmos a lsita, como por exemplo, excluindo um elemento: 

<img src="../assets/2022-09-01-20-16-09.png" width="800"/>

Raect atualizará os elementos apenas quando nós temos um `key` para cada elemento. Os valores do atributo `key` devem ser únicos entre os elementos do array.

<img src="../assets/2022-09-01-20-18-37.png" width="480"/>

## Resolvendo o problema da propriedade `key`

A primeira forma é definir a propriedade `key` para o objeto original, como mostrado em  [ListScreenKeyManually.js](./src/screens/ListScreenKeyManually.js).

A segunda maneira é utilizando o prop `keyExtractor` do `FlatList`. Esse exemplo é demonstrado em [ListScreenKeyExtractor.js](./src/screens/ListScreenKeyExtractor.js).

## Props importantes para o `FlatList`

Em [ListScreenStyled.js](./src/screens/ListScreenStyled.js) estamos usando algumas propriedades para alterar a aparência e o comportamento do componente `FlatList`. A primeira propriedade é `horizontal`, que muda a direção de renderização. E a segunda propriedade utilizada foi `showsHorizontalScrollIndicator`, que permite ocultar a barra de rolagem horizontal.

## Exercício

### 1. Crie um novo componente que utilize o `FlatList` com as seguintes especificações:
- Faça o `FlatList` rolar na vertical novamente
- Adicione uma nova propriedade chamada `age` em cada objeto da lista `friends`
- Mostre o valor da idade nos elementos renderizados na `FlatList`

Utilize a referência a seguir:

<img src="../assets/2022-09-01-21-34-51.png" width="300"/>

### 2. Você deve criar um aplicativo uma lista de números de `1` a `10`. Cada número na lista deve ser clicável. Quando um número é clicado, o aplicativo deve exibir um alerta mostrando o dobro do número clicado.

Etapas:

- Configure um novo projeto React Native.
- Implemente uma tela que contenha uma `FlatList`.
- Configure a `FlatList` para exibir números de 1 a 10.
- Torne cada item da lista clicável. Utilize o componente [Button](https://reactnative.dev/docs/button) para esse propósito.
- Quando um item da lista for clicado, exiba um alerta mostrando o dobro do número clicado.
- Utilize a função [window.alert](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert) do JavaScript (para a versão web) ou [Alert.alert](https://reactnative.dev/docs/alert) (Android/iOS) para exibir o resultado da operação.

## Referência

- [Documentação do componente FlatList](https://reactnative.dev/docs/flatlist)

