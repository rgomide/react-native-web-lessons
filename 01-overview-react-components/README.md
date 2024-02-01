# Visão geral sobre componentes React
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Componentes](#componentes)
- [Regras para JSX](#regras-para-jsx)
- [Exercício](#exercício)
- [Referência](#referência)

## Componentes

Um componente React pode ser analizado em 4 partes:

1. Importação de bibliotecas
2. Criação do componente. Um componente é uma função que retorna um código JSX.
3. Criação da folha de estilo do seu componente.
4. Exportar o componente para ser utilizado em outras partes do seu projeto.

Verifique o arquivo [ComponentScreen.js](./src/screens/ComponentScreen.js) para mais detalhes. Além disso, o arquivo [App.js](./App.js) faz o uso desse componente.

## Regras para JSX

- Nós podemos utilizar diferentes elementos JSX como se fosse um conteúdo HTML
- Nós podemos configurar diferentes elementos JSX utilizando as suas `props`
- Podemos utilizar expressões JS dentro de blocos JSX a partir do uso de chaves `{}`
- Os elementos JSX podem ser atribuídos em variáveis. O valor dessa variável pode ser utilziada para compor o bloco JSX

## Exercício

1. Crie um novo componente chamado `LessonComponent` que:
    - Mostre dois elementos `Text`
    - O primeiro deve conter o texto `Iniciando os estudos de React Native!` e ter o tamanho de fonte igual a `45`
    - O segundo elemento deve conter o texto `O meu nome é <seu nome>` e ter o tamanho de fonte igual a `20`
    - Para o segundo elemento `Text`, atribua o seu nome a uma variável e então mostre o valor dessa variável dentro do elemento JSX
    - Manipule o arquivo `App.js` para mostrar o seu componente

## Referência

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)