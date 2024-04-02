# Layout With React Native
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [Box screen](#box-screen)
- [Alinhando itens com Flex](#alinhando-itens-com-flex)
- [Flex direction](#flex-direction)
- [Justify content](#justify-content)
- [Flex values](#flex-values)
- [Align Self nos filhos](#align-self-nos-filhos)
- [A propriedade Position](#a-propriedade-position)
- [Top, bottom, left e right](#top-bottom-left-e-right)
- [Aplicando sistemas de layout](#aplicando-sistemas-de-layout)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Basicamente, nós temos três abordagens para a definição de layout:

- Modelo box object
- Flex box
- Position

A imagem abaixo mostra uma comparação entre esses três tipos de sistemas de layout:

![](../assets/2022-10-08-21-17-38.png)

## Box screen

Neste projeto, nós temos a tela [BoxScreen.js](src/screens/BoxScreen.js) que mostra o conteúdo básico sobre o `Box Object Model`.

Esta abordagem é similar ao HTML box model. Para cada objeto, nós temos margin, border, padding e o conteúdo. A imagem a seguir ilustra essa estrutura:

![](../assets/2022-10-08-21-34-12.png)

Por padrão, todos os elementos nativos possuem margin, border e padding iguais a zero.

Nós podemos ajustar qualquer valor dessas configurações para cada lado (`top`, `bottom`, `right` ou `left`):

![](../assets/2022-10-08-21-41-38.png)

![](../assets/2022-10-08-21-44-04.png)

Além disso, nós podemos utilizar alguns atalhos que representam `todos os lados`, `horizontal` ou `vertical`.

![](../assets/2022-10-08-21-46-34.png)

No arquivo [BoxScreen.js](src/screens/BoxScreen.js) nós temos essas propriedades aplicadas em dois componentes. O primeiro componente é uma `View` com as seguintes propriedades:

```js
borderWidth: 3,
borderColor: 'black'
```

Também, nós temos um objeto `Text` com:

```js
borderWidth: 10,
borderColor: 'red',
margin: 20,
paddingVertical: 10
```

Executando esse exemplo, nós podemos verificar os espaçamentos no componente `Text`. Existem configurações diferentes para `border`, `margin` e `padding`.

## Alinhando itens com Flex

Nós utilizamos a abordagem do Flex Box para posicionar múltiplos elementos com um componente pai em comum.

A tela [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) utiliza Flex Box para a definição dos layouts dos componentes `View`.

Neste arquivo, cada `View` possui três componentes `Text`:

![](../assets/2022-10-08-22-33-09.png)

A primeira `View` (elemento pai) possui o valor padrão para a propriedade `alignItems`. O valor padrão é `'stretch'`.

![](../assets/2022-10-08-22-44-03.png)

A próxima `View` possui `alignItems` igual a `flex-start`. Isso significa que cada componente manterá no início do container e o `width` é apenas o espaço necessário para renderizar o conteúdo do componente.

![](../assets/2022-10-08-22-52-16.png)

Nós podemos utilizar o valor `center` para `alignitems`. Os elementos ficarão posicionados no centro.

![](../assets/2022-10-08-22-54-49.png)

E, finalmente, nós utilizamos o valor `flex-end` para alinhar todos os elementos filhos no final do container.

![](../assets/2022-10-08-22-58-03.png)

## Flex direction

Esta propriedade nos dá o controle sobre a direção dos elementos. Os elementos podem ser colocados verticalmente (comportamento padrão) ou horizontalmente.

![](../assets/2022-10-08-23-01-06.png)

Na imagem acima podemos verificar como utilizar a propriedade `flexDirection` e os dois valores permitidos (`column` ou `row`).

Podemos verificar esta propriedade no contêiner `View` com o estilo `viewStyleRow` no arquivo [FlexBoxScreen.js](src/screens/FlexBoxScreen.js).

O `alignItems` também mudará a referência de direção quando usarmos o valor `row`. A imagem abaixo mostra como `alignitems` é renderizado para ambas as configurações de `flexDirection`.

![](../assets/2022-10-08-23-07-42.png)

## Justify content

A propriedade `justifyContent` distribui os filhos ao longo do eixo primário. O eixo primário é qualquer que seja o `flexDirection` definido.

Temos estes valores possíveis:

- `flex-start`
- `flex-end`
- `center`
- `space-between`
- `space-around`
- `space-evenly`

O efeito de cada valor da propriedade `justifyContent` é mostrado na imagem abaixo:

![](../assets/2022-10-08-23-26-48.png)

Em [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) podemos verificar a `View` com o estilo `viewStyleJustifyContent`. Este estilo possui a propriedade `justifyContent: 'space-evently'`. Esse valor aplica os mesmos espaços entre e fora dos elementos.

## Flex values

Para elementos pais, vimos as propriedades `alignItems`, `justifyContent` e `flexDirection`. Nesta seção aprenderemos sobre as propriedades filhas `flex` e `alignSelf`.

![](../assets/2022-10-08-23-36-11.png)

A propriedade `flex` faz com que um filho de um pai ocupe o máximo de espaço possível. Esta propriedade também é usada para definir a proporção de cada filho calculando a soma dos valores `flex` e fornecendo a porcentagem relativa para cada elemento.

Podemos ver esta propriedade em ação no elemento `View` na tela [FlexBoxScreen.js](src/screens/FlexBoxScreen.js#44).

Os dois primeiros elementos `Text` possuem o estilo `flexOne` (`flex: 1`) e o terceiro elemento possui o estilo `flexTwo` (`flex: 2`). O valor total dos valores `flex` é 4. Isso significa que o primeiro e os dois elementos têm 25% de espaço e o último elemento 50%.

## Align Self nos filhos

A propriedade `align Self` em filhos essencialmente substitui o valor pai `alignItems`. Assim podemos definir o alinhamento a nível do filho.

Verifique o `View` com o estilo `viewStyleStrech` no arquivo [FlexBoxScreen.js](src/screens/FlexBoxScreen.js). Neste exemplo aplicamos a propriedade `alignSelf: 'center'` no segundo elemento.

## A propriedade Position

The `position` allows to set how a single element gets laid out inside of a parent. The default value is `position: 'relative'` and we use the `position: 'absolute'` property to override Box object Model and Flex Box.

In this project we have the [PositionScreen.js](src/screens/PositionScreen.js) to show this layout approach in action.

The second `Text` element inside the `View` have the `position: 'absolute'` value.

## Top, bottom, left e right
The `top`, `bottom`, `left` and `right` properties can be used in any single element to displace it by this reference (absolute or relative). In the [PositionScreen.js](src/screens/PositionScreen.js) we added the `topTen` style to second element. This element is displaced from parent top by 10 pixels.

## Aplicando sistemas de layout

The diagram below give us an idea about when we use each kind of layout system. Note that we can combine them.

![](../assets/2022-10-09-00-35-55.png)

## Exercício

Create a new screen with the specifications below:

![](../assets/2022-10-09-00-50-47.png)

## Referências
- [Layout with Flexbox](https://reactnative.dev/docs/flexbox)
- [Layout props](https://reactnative.dev/docs/layout-props)
- [Yoga Playground](https://yogalayout.com/playground)
- [The Full React Native Layout Cheat Sheet
](https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c)
- [React Native Styling: Structure for Style Organization](https://thoughtbot.com/blog/structure-for-styling-in-react-native)