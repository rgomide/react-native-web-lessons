# Consumindo API REST e efeitos colaterais com `useEffect`
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)


- [Uso do Hook `useEffect` no React Native](#uso-do-hook-useeffect-no-react-native)
  - [Introdução ao `useEffect`](#introdução-ao-useeffect)
  - [O segundo parâmetro do useEffect](#o-segundo-parâmetro-do-useeffect)
  - [Exemplos](#exemplos)
  - [Boas Práticas](#boas-práticas)
  - [Armadilhas a Serem Evitadas](#armadilhas-a-serem-evitadas)
- [Telas de exemplo deste projeto](#telas-de-exemplo-deste-projeto)
- [Requisições HTTP com a API `fetch`](#requisições-http-com-a-api-fetch)
- [Exercícios](#exercícios)
- [Referências](#referências)
  - [Requisições HTTP](#requisições-http)
  - [useEffect](#useeffect)
  - [API](#api)

## Uso do Hook `useEffect` no React Native

### Introdução ao `useEffect`

O `useEffect` é um hook do React que permite realizar efeitos colaterais em componentes funcionais. Efeitos colaterais são operações que afetam o mundo externo ou que dependem dele, como buscar dados de uma API, assinar eventos do sistema, ou configurar e limpar timers.

> **Atenção:** boa parte do material sobre `useEffect` na internet foi escrita para React na web e fala em "manipular o DOM". No React Native **não existe DOM**: os componentes são traduzidos em *views* nativas. Sempre que um exemplo usar `document` ou `window`, ele só funciona no navegador (via `react-native-web`).

#### Ciclo de Vida de um Componente React

Para entender melhor o `useEffect`, é importante compreender o ciclo de vida de um componente React. Este ciclo inclui fases como renderização, atualização do estado e execução de efeitos colaterais.

1. **Montagem (Mounting):**
   - O componente é criado e inserido na árvore de componentes (que o React Native traduz em *views* nativas).
   - `useEffect` é executado após a renderização inicial do componente.

2. **Atualização (Updating):**
   - O componente pode ser atualizado devido a mudanças no estado ou nas propriedades.
   - `useEffect` pode ser re-executado se as dependências especificadas mudarem.
   - **Antes de cada re-execução**, o React roda a função de limpeza (cleanup) do efeito anterior. Ou seja: cleanup **não** acontece só na desmontagem.

3. **Desmontagem (Unmounting):**
   - O componente é removido da árvore de componentes.
   - O retorno da função passada para `useEffect` é executado uma última vez para limpar qualquer efeito colateral (cleanup).

Portanto, para um efeito com dependências, a sequência real é:

```
render -> efeito -> (dependência muda) -> cleanup -> efeito -> ... -> (desmontagem) -> cleanup
```

#### Quando o `useEffect` é Executado

- **Por padrão:** O `useEffect` é executado após a renderização do componente.
- **Com dependências:** Pode ser configurado para ser executado somente quando certas dependências mudarem.

#### Sintaxe Básica

```js
useEffect(() => {
  // Código do efeito colateral aqui

  return () => {
    // Código de limpeza aqui (opcional)
  }
}, [dependencias])
```
- O primeiro argumento é uma função onde colocamos o código do efeito colateral.
- O segundo argumento é um array de dependências que controla quando o efeito será executado.

### O segundo parâmetro do useEffect
- `useEffect(() => {})`: Execute a função **toda vez** que o componente for renderizado
- `useEffect(() => {}, [])`: Executa a função **apenas** quando o componente é renderizado pela **primeira** vez
- `useEffect(() => {}, [value])`: Executa a função **apenas** quando o componente é renderizado pela **primeira** vez, **e** sempre que `value` **é alterado**.

### Exemplos

#### 1. Efeito Simples que Executa Após Cada Renderização

Este exemplo mostra um `useEffect` que imprime uma mensagem no console toda vez que o componente é renderizado.

```javascript
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Exemplo1 = () => {
  useEffect(() => {
    console.log('O componente foi renderizado.')
  })

  return (
    <View>
      <Text>Veja o console para uma mensagem.</Text>
    </View>
  )
}

export default Exemplo1
```

#### 2. Efeito com Dependência

Este exemplo demonstra como executar o efeito apenas quando uma dependência específica muda.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Exemplo2 = () => {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`O contador mudou para: ${contador}`)
  }, [contador])

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador((atual) => atual + 1)} />
    </View>
  )
}

export default Exemplo2
```

#### 3. Efeito com Limpeza (Cleanup)

Este exemplo mostra como usar a função de limpeza para evitar efeitos colaterais indesejados, como quando se configura um timer.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const Exemplo3 = () => {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(s => s + 1)
    }, 1000)

    // Função de limpeza para limpar o intervalo
    return () => clearInterval(intervalo)
  }, [])

  return (
    <View>
      <Text>Segundos: {segundos}</Text>
    </View>
  )
}

export default Exemplo3
```

### Boas Práticas

1. **Especificar Dependências Corretamente:**
   
   Sempre passe todas as dependências que o efeito utiliza no array de dependências. Isso garante que o efeito seja executado corretamente quando essas dependências mudarem.
   ```javascript
   useEffect(() => {
     // código que usa `data`
   }, [data])  // Inclua `data` nas dependências
   ```

2. **Limpeza Adequada:**
   
   Sempre defina uma função de limpeza quando seu efeito configurar algo que precise ser limpo, como assinaturas de eventos, timers ou subscrições. No React Native usamos APIs como [`Dimensions`](https://reactnative.dev/docs/dimensions) e [`AppState`](https://reactnative.dev/docs/appstate), que devolvem um objeto com o método `remove()`.
   ```javascript
   import { Dimensions } from 'react-native'

   useEffect(() => {
     const subscription = Dimensions.addEventListener('change', ({ window }) => {
       console.log('Novo tamanho da tela:', window.width, window.height)
     })

     return () => {
       subscription.remove()
     }
   }, [])
   ```

3. **Dividir Efeitos:**
   
   Divida efeitos complexos em múltiplos `useEffect` com dependências distintas. Isso torna o código mais legível e fácil de manter.
   ```javascript
   useEffect(() => {
     // Código do efeito A
   }, [dependenciaA])

   useEffect(() => {
     // Código do efeito B
   }, [dependenciaB])
   ```

4. **Manter o Código do Efeito Simples:**
   
   Tente manter o código dentro de `useEffect` simples e focado em um único propósito. Se o código dentro de um efeito se tornar muito grande, considere movê-lo para uma função separada.

5. **Entender o Ciclo de Vida dos Efeitos:**
   
   Lembre-se de que `useEffect` é executado após a renderização, e que os efeitos podem ser executados novamente se suas dependências mudarem. Isso pode ajudar a evitar bugs relacionados ao ciclo de vida dos componentes.

### Armadilhas a Serem Evitadas

1. **Esquecer Dependências:**
   
   Não esquecer de incluir todas as dependências no array de dependências pode levar a bugs difíceis de rastrear.
   ```javascript
   useEffect(() => {
     const fetchData = async () => {
       const result = await fetch(url)
       setData(await result.json())
     }

     fetchData()
   }, [url])  // Inclua `url` para garantir que fetchData seja chamado quando `url` mudar
   ```

2. **Loops Infinitos:**
   
   Certifique-se de que seu efeito não cause um loop infinito de renderizações. Isso pode acontecer se você atualizar o estado dentro do efeito sem configurar as dependências corretamente.
   ```javascript
   useEffect(() => {
     setCount(count + 1)  // Isso causa um loop infinito, pois `count` é uma dependência
   }, [count])
   ```

3. **Limpezas Inadequadas:**
   
   Esquecer de limpar efeitos pode levar a comportamentos inesperados, como múltiplas assinaturas de eventos ou vazamentos de memória.
   ```javascript
   useEffect(() => {
     const interval = setInterval(() => {
       console.log('Intervalo ativo')
     }, 1000)

     return () => clearInterval(interval)  // Limpeza adequada do intervalo
   }, [])
   ```

4. **Usar `useEffect` para o que é apenas cálculo:**
   
   Não use `useEffect` para derivar um valor que pode ser calculado durante a renderização. Guardar esse valor em um estado só cria um render extra e uma fonte de verdade duplicada. Reserve o `useEffect` para sincronizar o componente com algo **externo** ao React (rede, timers, eventos do sistema, armazenamento).
   ```javascript
   // Evite fazer isso: estado derivado sincronizado por efeito
   const [nomeCompleto, setNomeCompleto] = useState('')

   useEffect(() => {
     setNomeCompleto(`${nome} ${sobrenome}`)
   }, [nome, sobrenome])

   // Prefira fazer isso: calcule durante a renderização
   const nomeCompleto = `${nome} ${sobrenome}`
   ```

   O caminho inverso também é armadilha: **nunca** execute um efeito colateral direto no corpo do componente. O render precisa ser puro, e o corpo do componente pode rodar mais de uma vez para o mesmo resultado na tela.
   ```javascript
   const Componente = ({ titulo }) => {
     // Evite: efeito colateral durante a renderização
     Notificacoes.setBadge(titulo)

     // Prefira: dentro de um useEffect
     useEffect(() => {
       Notificacoes.setBadge(titulo)
     }, [titulo])
   }
   ```

5. **Condições de Corrida (Race Conditions) em Requisições:**

   Quando um efeito dispara uma requisição a cada mudança de dependência, as respostas podem chegar **fora de ordem**: uma busca antiga e lenta pode sobrescrever o resultado da busca mais recente. Use a função de limpeza para invalidar a requisição anterior.
   ```javascript
   // Evite: a resposta de uma busca antiga pode sobrescrever a mais nova
   useEffect(() => {
     buscarPersonagens(nome).then(setResultado)
   }, [nome])

   // Prefira: o cleanup marca a requisição anterior como obsoleta
   useEffect(() => {
     let ignore = false

     const buscar = async () => {
       const dados = await buscarPersonagens(nome)
       if (!ignore) {
         setResultado(dados)
       }
     }

     buscar()

     return () => {
       ignore = true
     }
   }, [nome])
   ```
   Veja esse padrão aplicado na tela [chars-effect](./src/screens/chars-effect/index.js).

6. **Dependências Mutáveis:**
   
   Evite usar objetos ou arrays como dependências diretamente, pois cada renderização criará uma nova referência, fazendo o efeito ser executado repetidamente. Considere usar `useMemo` ou `useCallback` para memorizar valores ou funções complexas.
   ```javascript
   const data = { name: 'John' }

   useEffect(() => {
     // Isso pode causar re-execução constante do efeito
   }, [data])

   // Prefira
   const memoizedData = useMemo(() => ({ name: 'John' }), [])
   useEffect(() => {
     // Agora o efeito só será executado quando memoizedData mudar
   }, [memoizedData])
   ```

## Telas de exemplo deste projeto

- [EffectIntroductionScreen](./src/screens/effect-introduction/index.js): demonstração do ciclo de vida. Abra o console e clique em **Increment Counter** para ver a ordem em que o render, os efeitos e as funções de limpeza são executados:

  ```
  COMPONENT RENDERING
  INSIDE useEffect WITH EMPTY ARRAY
  INSIDE useEffect FOR counter STATE
  INCREMENT COUNTER CLICK
  COMPONENT RENDERING
  CLEANUP FUNCTION FOR counter STATE
  INSIDE useEffect FOR counter STATE
  ```

  Repare que o efeito com array vazio (`[]`) não roda de novo, e que o cleanup do efeito de `counter` acontece **antes** da nova execução do efeito.

- [MainCharsScreen](./src/screens/main-chars/index.js): busca disparada manualmente, por um botão. Não usa `useEffect`.
- [CharsEffectScreen](./src/screens/chars-effect/index.js): a mesma busca disparada por `useEffect` a cada alteração do campo de texto, com proteção contra condição de corrida.

## Requisições HTTP com a API `fetch`

A [`fetch`](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/fetch) é a API padrão de requisições HTTP e já vem embutida no React Native — não é preciso instalar nenhuma biblioteca. Ela devolve uma `Promise` que resolve para um objeto [`Response`](https://developer.mozilla.org/pt-BR/docs/Web/API/Response).

```javascript
const response = await fetch('https://rickandmortyapi.com/api/character/')
const data = await response.json()
```

Verifique o arquivo [rick-and-morty](./src/component/api/rick-and-morty/index.js) e o componente [MainCharsScreen](./src/screens/main-chars/index.js) para o exemplo completo usado neste projeto.

### Três detalhes que costumam pegar quem vem do Axios

1. **`fetch` não rejeita a Promise em erro HTTP.** Um retorno 404 ou 500 é considerado uma requisição bem-sucedida do ponto de vista da rede. O `catch` só é acionado em falha de conexão. Verifique você mesmo a propriedade [`response.ok`](https://developer.mozilla.org/pt-BR/docs/Web/API/Response/ok):
   ```javascript
   const response = await fetch(url)

   if (!response.ok) {
     throw new Error(`Requisição falhou com status ${response.status}`)
   }
   ```

2. **O corpo não vem pronto.** É preciso chamar `await response.json()` (ou `.text()`) para ler o conteúdo. Não existe a propriedade `data` do Axios.

3. **Não existe timeout.** Sem um limite, uma requisição pode ficar pendurada indefinidamente. Use um [`AbortController`](https://developer.mozilla.org/pt-BR/docs/Web/API/AbortController) com `setTimeout`:
   ```javascript
   const controller = new AbortController()
   const timeoutId = setTimeout(() => controller.abort(), 5000)

   try {
     const response = await fetch(url, { signal: controller.signal })
     return await response.json()
   } finally {
     clearTimeout(timeoutId)
   }
   ```

O mesmo `AbortController` também serve para cancelar a requisição na função de limpeza de um `useEffect`, quando o componente é desmontado ou a busca muda.

## Exercícios

### Exercício 1: Consumo de API em React Native

Desenvolva um aplicativo em React Native que consuma dados de uma API pública e exiba as informações em uma lista.

1. Requisitos:
  - Crie um aplicativo React Native que utilize a API `fetch` para realizar uma requisição HTTP a uma API pública.
  - Utilize o endpoint https://jsonplaceholder.typicode.com/posts para buscar uma lista de posts.
  - Exiba os dados retornados em um componente FlatList.
2.	Funcionalidades:
  - Exibir o título e o corpo de cada post em um card dentro da lista.
  - Tratar erros de requisição e exibir uma mensagem apropriada caso ocorra algum problema na comunicação com a API.
  - Exibir um indicador de carregamento ([ActivityIndicator](https://reactnative.dev/docs/activityindicator)) enquanto a requisição estiver em andamento.

### Exercício 2: Contador com Limpeza de Intervalo

Criar um componente que incrementa um contador a cada segundo, utilizando useEffect para configurar e limpar o intervalo.

**Instruções:**
1. Crie um componente funcional.
2. Inicialize um estado para o contador com o valor 0.
3. Utilize `useEffect` para configurar um timer (consultar [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)) que incrementa o contador a cada segundo.
4. Interrompa o timer (consultar [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)) quando o componente for desmontado.

### Exercício 3: Busca de Dados com API

Criar um componente que busca dados de uma API ao montar e exibe os dados. Utilize `useEffect` para realizar a busca e gerenciar o estado.

**Instruções:**
1. Crie um componente funcional.
2. Inicialize estados para armazenar os dados e possíveis erros.
3. Utilize `useEffect` para buscar os dados de uma API (ex.: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)) quando o componente montar.
4. Proteja o efeito contra condição de corrida com uma função de limpeza (veja a armadilha 5).
5. Exiba os dados ou a mensagem de erro no componente.

### Exercício 4: Exibição Condicional de Mensagem

Criar uma tela que exibe uma mensagem condicionalmente com base no estado, utilizando `useEffect` para alterar o título do cabeçalho da navegação quando o estado mudar.

**Instruções:**
1. Crie uma tela funcional que receba a prop `navigation`.
2. Inicialize um estado booleano e um botão que alterne esse estado.
3. Utilize `useEffect` para alterar o título do cabeçalho com base no valor do estado. Use [`navigation.setOptions`](https://reactnavigation.org/docs/navigation-object/#setoptions) — em React Native não existe `document.title`.
   ```javascript
   useEffect(() => {
     navigation.setOptions({ title: ativo ? 'Ativo' : 'Inativo' })
   }, [navigation, ativo])
   ```
4. Exiba uma mensagem condicionalmente na tela a partir de um elemento do tipo [Text](https://reactnative.dev/docs/text).

### Exercício 5: Timer com Limite

Criar um componente que exibe um contador regressivo a partir de um valor inicial, utilizando `useEffect` para configurar e limpar o intervalo, e parando quando o contador atingir zero.

**Instruções:**
1. Crie um componente funcional.
2. Inicialize um estado com o valor inicial do contador a partir de uma prop chamada `valorInicial`.
3. Utilize `useEffect` para configurar um intervalo que decremente o contador a cada segundo.
4. Interrompa o timer quando o contador atingir zero.

### Exercício 6: Guia de referência da série Rick And Morty

Melhore o projeto de exemplo com funcionalidades adicionais de acordo com o projeto abaixo:

<p align="center">
  <image src="../assets/exerciseMock.drawio.png"/>
</p>

## Referências

### Requisições HTTP
- [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Função async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Operador await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/fetch)
- [Response](https://developer.mozilla.org/pt-BR/docs/Web/API/Response)
- [Response.ok](https://developer.mozilla.org/pt-BR/docs/Web/API/Response/ok)
- [AbortController](https://developer.mozilla.org/pt-BR/docs/Web/API/AbortController)
- [Networking no React Native](https://reactnative.dev/docs/network)

### useEffect
- [useEffect](https://react.dev/reference/react/useEffect)
- [Sincronizando com Effects](https://react.dev/learn/synchronizing-with-effects)
- [Ciclo de vida de Effects reativos](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Removendo dependências de Effects](https://react.dev/learn/removing-effect-dependencies)
- [Você pode não precisar de um efeito](https://react.dev/learn/you-might-not-need-an-effect)

### API
- [Rick and Morty API - Documentação](https://rickandmortyapi.com/documentation)
- [API Rank](https://apirank.dev/)