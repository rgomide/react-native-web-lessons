# AsyncStorage

## Sumário
- [Introdução](#introdução)
- [Uso](#uso)
- [Funções](#funções)
- [Referências](#referências)

## Introdução

O AsyncStorage utiliza o armazenamento local dos dispositivos para salvar conteúdo. O [React Native AsyncStorage](https://reactnative.dev/docs/asyncstorage) oficial está depreciado, por isso estamos usando uma biblioteca de terceiros chamada [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage).

Esta biblioteca utiliza o mesmo mecanismo.

## Uso

Os valores são armazenados em pares `key -> value`. Basicamente, armazenamos e lemos dados com as funções `setItem` e `getItem`.

Confira o arquivo [App.js](./App.js) para um exemplo básico de uso.

## Funções

De acordo com a [documentação da API](https://react-native-async-storage.github.io/async-storage/docs/api), temos essas funções públicas:
- `getItem`
- `setItem`
- `mergeItem`
- `removeItem`
- `getAllKeys`
- `multiGet`
- `multiSet`
- `multiMerge`
- `multiRemove`
- `clear`
- `useAsyncStorage`

## Exercício

Neste exercício, você implementará um projeto React Native com pelo menos 5 telas que consomem dados de uma API aberta. Além disso, você explorará o uso dos hooks `useState`, `useEffect` e `useContext` para gerenciar estado e fluxo de dados dentro do seu aplicativo.

### Requisitos:

- Crie um projeto React Native que inclua as 5 telas descritas no próximo tópico.
- As telas devem estar conectadas por meio de uma navegação em pilha usando React Navigation.
- Seu aplicativo deve consumir dados de uma API aberta. Você pode escolher qualquer API ([public-apis](https://github.com/public-apis/public-apis)) que forneça dados relevantes para o seu aplicativo.
- Você deve usar Axios para fazer as requisições à API e manipular as respostas.
- Use o hook `useState` para gerenciar o estado dentro de seus componentes. Este hook deve ser usado para armazenar dados recuperados da API e qualquer outro dado stateful necessário para o seu aplicativo.
- Use o hook `useEffect` para gerenciar efeitos colaterais dentro de seus componentes. Este hook deve ser usado para buscar dados da API e realizar quaisquer outros efeitos colaterais necessários para o seu aplicativo.
- Use o hook `useContext` para gerenciar o estado global dentro do seu aplicativo. Este hook deve ser usado para compartilhar estado e dados entre componentes que não estão diretamente relacionados na árvore de componentes.

### Telas Requeridas:

1. `Home screen`: Exiba uma lista de itens recuperados da API. Esta tela deve demonstrar o uso dos hooks `useState`, `useEffect` e `useContext`.
2. `Detail screen`: Exiba os detalhes de um item selecionado na tela Home. Esta tela deve demonstrar o uso de props para passar dados entre telas.
3. `Search screen`: Permita que os usuários pesquisem itens com base em uma palavra-chave. Esta tela deve demonstrar o uso de `TextInput` e funcionalidade de pesquisa.
4. `Favorites screen`: Exiba uma lista de itens que foram marcados como favoritos pelo usuário. Esta tela deve demonstrar o uso de `AsyncStorage` para persistir dados entre sessões.
5. `Settings screen`: Permita que os usuários configurem as configurações do aplicativo. Esta tela deve demonstrar o uso de checkboxes, switches e outros componentes de input. Salve essas configurações usando `AsyncStorage`.

## Referências

- [Repositório do AsyncStorage no Github](https://github.com/react-native-async-storage/async-storage)
- [Documentação de Uso](https://react-native-async-storage.github.io/async-storage/docs/usage)
- [public-apis](https://github.com/public-apis/public-apis)