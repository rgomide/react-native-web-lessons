# AsyncStorage

## Sumário
- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Funções](#funções)
- [Migração da v2 para a v3](#migração-da-v2-para-a-v3)
- [Referências](#referências)

## Introdução

O AsyncStorage utiliza o armazenamento local dos dispositivos para salvar conteúdo. O [React Native AsyncStorage](https://reactnative.dev/docs/asyncstorage) oficial está depreciado, por isso estamos usando uma biblioteca de terceiros chamada [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage).

Este projeto usa a **versão 3.1.1**, que trouxe uma API nova: em vez de importar um objeto global único, criamos uma instância de armazenamento com `createAsyncStorage`. Cada instância é ligada a um banco de dados próprio (SQLite no Android/iOS e IndexedDB na web), o que permite separar dados de contextos diferentes no mesmo app.

## Instalação

```bash
npm install @react-native-async-storage/async-storage@3.1.1
```

## Uso

Os valores são armazenados em pares `key -> value`, sempre como `string`. Primeiro criamos a instância de armazenamento e depois usamos as funções `setItem` e `getItem`.

```javascript
import { createAsyncStorage } from '@react-native-async-storage/async-storage'

const storage = createAsyncStorage('lessons')

await storage.setItem('someKey', 'some value!')
const value = await storage.getItem('someKey') // 'some value!' ou null
```

Para objetos e arrays, continue usando `JSON.stringify` na escrita e `JSON.parse` na leitura:

```javascript
const user = { id: 1, name: 'Denecley' }

await storage.setItem('user', JSON.stringify(user))
const userFromStorage = JSON.parse(await storage.getItem('user'))
```

Para ler ou escrever várias chaves de uma vez, use `getMany` e `setMany`:

```javascript
await storage.setMany({
  users: JSON.stringify(arrayOfUsers),
  someKey: 'some value!'
})

const entries = await storage.getMany(['users', 'someKey'])
// { users: '[...]', someKey: 'some value!' }
```

Os erros são lançados como `AsyncStorageError`, que possui as propriedades `type` e `errorMessage`:

```javascript
import { AsyncStorageError } from '@react-native-async-storage/async-storage'

try {
  await storage.setItem('someKey', 'some value!')
} catch (error) {
  if (error instanceof AsyncStorageError) {
    console.log(error.type, error.errorMessage)
  }
}
```

Confira o arquivo [App.js](./App.js) para um exemplo básico de uso.

## Funções

De acordo com a [documentação da API](https://react-native-async-storage.github.io/latest/api/usage/), a instância criada por `createAsyncStorage` possui estas funções públicas:
- `getItem(key)`: retorna a `string` armazenada ou `null`
- `setItem(key, value)`: grava um valor
- `removeItem(key)`: remove uma chave
- `getMany(keys)`: retorna um objeto `{ chave: valor | null }`
- `setMany(entries)`: grava várias chaves a partir de um objeto
- `removeMany(keys)`: remove várias chaves
- `getAllKeys()`: retorna todas as chaves armazenadas
- `clear()`: apaga todos os dados daquele armazenamento

## Migração da v2 para a v3

| v2 | v3 |
| --- | --- |
| `import AsyncStorage from '...'` | `const storage = createAsyncStorage('nome-do-banco')` |
| `multiGet(keys)` (retorna array de pares) | `getMany(keys)` (retorna objeto) |
| `multiSet(pares)` | `setMany(objeto)` |
| `multiRemove(keys)` | `removeMany(keys)` |
| `mergeItem` / `multiMerge` | removidos — leia, mescle no JS e grave de novo |
| `useAsyncStorage` | removido — use a instância diretamente |

O `export default` ainda existe na v3, mas aponta para o armazenamento legado (dados da v2) e serve apenas como caminho de migração — o uso recomendado é `createAsyncStorage`.

## Exercício

Neste exercício, você implementará um projeto React Native com pelo menos 5 telas que consomem dados de uma API aberta. Além disso, você explorará o uso dos hooks `useState`, `useEffect` e `useContext` para gerenciar estado e fluxo de dados dentro do seu aplicativo.

### Requisitos:

- Crie um projeto React Native que inclua as 5 telas descritas no próximo tópico.
- As telas devem estar conectadas por meio de uma navegação em pilha usando React Navigation.
- Seu aplicativo deve consumir dados de uma API aberta. Você pode escolher qualquer API pública que forneça dados relevantes para o seu aplicativo.
- Você deve usar a função `fetch` para fazer as requisições à API e manipular as respostas (lembre-se de usar `await response.json()` para ler o corpo da resposta e de verificar `response.ok` antes de usar os dados).
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
- [Documentação de Uso](https://react-native-async-storage.github.io/latest/api/usage/)
- [Guia de Migração para a v3](https://react-native-async-storage.github.io/latest/migration-to-3/)
- [Nomes de banco de dados](https://react-native-async-storage.github.io/latest/api/db-naming/)
- [Tratamento de erros](https://react-native-async-storage.github.io/latest/api/errors/)
- [Uso com Expo](https://react-native-async-storage.github.io/latest/integrations/expo/)
- [public-apis](https://github.com/public-apis/public-apis)
