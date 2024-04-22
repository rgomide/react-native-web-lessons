# Consuming a REST API
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

## O segundo parâmetro do useEffect
- `useEffect(() => {})`: Execute a função **toda vez** que o componente for renderizado
- `useEffect(() => {}, [])`: Executa a função apenas **apenas** quando o component é renderizado pela **primeira** vez
- `useEffect(() => {}, [value])`: Executa a função **apenas** quando o component é renderizado pela **primeira** vez, **e** quando o `value` **é alterado**.

## Axios

Verifique o arquivo [rick-and-morty](./src/component/api/rick-and-morty/index.js) para um exemplo.

## Exercício

Melhore o projeto de exemplo com funcionalidades adicionais de acordo com o projeto abaixo:

<p align="center">
  <image src="../assets/exerciseMock.drawio.png"/>
</p>

## Referências

### Requisições HTTP
- [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Função async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Operador await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Axios](https://axios-http.com/ptbr/docs/intro)

### useEffect
- [useEffect](https://react.dev/reference/react/useEffect)
- [Sincronizando com  Effects](https://react.dev/learn/synchronizing-with-effects)
- [Você pode não precisar de um efeito](https://react.dev/learn/you-might-not-need-an-effect)

### API
- [Rick and Morty API - Documentação](https://rickandmortyapi.com/documentation)
- [API Rank](https://apirank.dev/)