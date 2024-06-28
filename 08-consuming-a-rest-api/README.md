# Consumindo API REST e efeitos colaterais com `useEffect`
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)


- [Uso do Hook `useEffect` no React Native](#uso-do-hook-useeffect-no-react-native)
  - [Introdução ao `useEffect`](#introdução-ao-useeffect)
  - [O segundo parâmetro do useEffect](#o-segundo-parâmetro-do-useeffect)
  - [Exemplos](#exemplos)
  - [Boas Práticas](#boas-práticas)
  - [Armadilhas a Serem Evitadas](#armadilhas-a-serem-evitadas)
- [Axios](#axios)
- [Exercício](#exercício)
- [Referências](#referências)
  - [Requisições HTTP](#requisições-http)
  - [useEffect](#useeffect)
  - [API](#api)

## Uso do Hook `useEffect` no React Native

### Introdução ao `useEffect`

O `useEffect` é um hook do React que permite realizar efeitos colaterais em componentes funcionais. Efeitos colaterais são operações que afetam o mundo externo ou que dependem dele, como buscar dados de uma API, manipular o DOM diretamente, ou configurar e limpar timers.

#### Ciclo de Vida de um Componente React

Para entender melhor o `useEffect`, é importante compreender o ciclo de vida de um componente React. Este ciclo inclui fases como renderização, atualização do estado e execução de efeitos colaterais.

1. **Montagem (Mounting):**
   - O componente é criado e inserido no DOM.
   - `useEffect` é executado após a renderização inicial do componente.

2. **Atualização (Updating):**
   - O componente pode ser atualizado devido a mudanças no estado ou nas propriedades.
   - `useEffect` pode ser re-executado se as dependências especificadas mudarem.

3. **Desmontagem (Unmounting):**
   - O componente é removido do DOM.
   - O retorno da função passada para `useEffect` é executado para limpar qualquer efeito colateral (cleanup).

#### Quando o `useEffect` é Executado

- **Por padrão:** O `useEffect` é executado após a renderização do componente.
- **Com dependências:** Pode ser configurado para ser executado somente quando certas dependências mudarem.

#### Sintaxe Básica

```js
useEffect(() => {
  // Código do efeito colateral aqui

  return () => {
    // Código de limpeza aqui (opcional)
  };
}, [dependencias])
```
- O primeiro argumento é uma função onde colocamos o código do efeito colateral.
- O segundo argumento é um array de dependências que controla quando o efeito será executado.

### O segundo parâmetro do useEffect
- `useEffect(() => {})`: Execute a função **toda vez** que o componente for renderizado
- `useEffect(() => {}, [])`: Executa a função apenas **apenas** quando o component é renderizado pela **primeira** vez
- `useEffect(() => {}, [value])`: Executa a função **apenas** quando o component é renderizado pela **primeira** vez, **e** quando o `value` **é alterado**.

### Exemplos

#### 1. Efeito Simples que Executa Após Cada Renderização

Este exemplo mostra um `useEffect` que imprime uma mensagem no console toda vez que o componente é renderizado.

```javascript
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

function Exemplo1() {
  useEffect(() => {
    console.log('O componente foi renderizado.')
  });

  return (
    <View>
      <Text>Veja o console para uma mensagem.</Text>
    </View>
  );
}

export default Exemplo1
```

#### 2. Efeito com Dependência

Este exemplo demonstra como executar o efeito apenas quando uma dependência específica muda.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

function Exemplo2() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log(`O contador mudou para: ${contador}`)
  }, [contador])

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}

export default Exemplo2
```

#### 3. Efeito com Limpeza (Cleanup)

Este exemplo mostra como usar a função de limpeza para evitar efeitos colaterais indesejados, como quando se configura um timer.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

function Exemplo3() {
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
  );
}

export default Exemplo3
```

### Boas Práticas

1. **Especificar Dependências Corretamente:**
   
   Sempre passe todas as dependências que o efeito utiliza no array de dependências. Isso garante que o efeito seja executado corretamente quando essas dependências mudarem.
   ```javascript
   useEffect(() => {
     // código que usa `data`
   }, [data]);  // Inclua `data` nas dependências
   ```

2. **Limpeza Adequada:**
   
   Sempre defina uma função de limpeza quando seu efeito configurar algo que precise ser limpo, como assinaturas de eventos, timers ou subscrições.
   ```javascript
   useEffect(() => {
     const handler = () => {
       // código do manipulador de eventos
     };
     window.addEventListener('resize', handler);

     return () => {
       window.removeEventListener('resize', handler);
     };
   }, []);
   ```

3. **Dividir Efeitos:**
   
   Divida efeitos complexos em múltiplos `useEffect` com dependências distintas. Isso torna o código mais legível e fácil de manter.
   ```javascript
   useEffect(() => {
     // Código do efeito A
   }, [dependenciaA]);

   useEffect(() => {
     // Código do efeito B
   }, [dependenciaB]);
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
       const result = await fetch(url);
       setData(await result.json());
     };

     fetchData();
   }, [url]);  // Inclua `url` para garantir que fetchData seja chamado quando `url` mudar
   ```

2. **Loops Infinitos:**
   
   Certifique-se de que seu efeito não cause um loop infinito de renderizações. Isso pode acontecer se você atualizar o estado dentro do efeito sem configurar as dependências corretamente.
   ```javascript
   useEffect(() => {
     setCount(count + 1)  // Isso causará um loop infinito se `count` estiver nas dependências
   }, [count])
   ```

3. **Limpezas Inadequadas:**
   
   Esquecer de limpar efeitos pode levar a comportamentos inesperados, como múltiplas assinaturas de eventos ou vazamentos de memória.
   ```javascript
   useEffect(() => {
     const interval = setInterval(() => {
       console.log('Intervalo ativo');
     }, 1000);

     return () => clearInterval(interval);  // Limpeza adequada do intervalo
   }, []);
   ```

4. **Efeitos Sincronizados Desnecessariamente:**
   
   Não use `useEffect` para efeitos síncronos simples que podem ser resolvidos diretamente na renderização. Use `useEffect` para efeitos colaterais que dependem de operações assíncronas ou de interações com o ambiente externo.
   ```javascript
   // Evite fazer isso
   useEffect(() => {
     document.title = `Você clicou ${count} vezes`;
   }, [count]);

   // Prefira fazer isso
   document.title = `Você clicou ${count} vezes`;
   ```

5. **Dependências Mutáveis:**
   
   Evite usar objetos ou arrays como dependências diretamente, pois cada renderização criará uma nova referência, fazendo o efeito ser executado repetidamente. Considere usar `useMemo` ou `useCallback` para memorizar valores ou funções complexas.
   ```javascript
   const data = { name: 'John' };

   useEffect(() => {
     // Isso pode causar re-execução constante do efeito
   }, [data]);

   // Prefira
   const memoizedData = useMemo(() => ({ name: 'John' }), []);
   useEffect(() => {
     // Agora o efeito só será executado quando memoizedData mudar
   }, [memoizedData]);
   ```

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