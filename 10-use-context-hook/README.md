# Hook useContext
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

- [Introdução](#introdução)
- [useContext](#usecontext)
  - [Estrutura do projeto de exemplo](#estrutura-do-projeto-de-exemplo)
  - [Valor padrão do contexto](#valor-padrão-do-contexto)
  - [Atualizando o contexto](#atualizando-o-contexto)
  - [Armadilhas](#armadilhas)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Esse hook permite ler e assinar um contexto a partir de um componente React. Ele resolve o problema do *prop drilling*: passar a mesma informação por vários níveis de componentes que não a utilizam, apenas para entregá-la a um componente lá no fundo da árvore.

Lemos um contexto chamando `useContext` no nível superior do nosso componente:

```js
import { useContext } from 'react'

const MeuComponente = () => {
  const contexto = useContext(AlgumContexto)
  // ...
}
```

Precisamos criar o contexto acima do componente com a função [createContext](https://react.dev/reference/react/createContext).

## useContext

Para usar um contexto, lembre-se de:

1. Criar um contexto com a função `createContext`.
2. Adicionar um provider **acima** dos componentes que vão usar o contexto.
3. Chamar o hook `useContext` dentro do componente para recuperar o valor do contexto.

> **React 19:** a partir dessa versão o próprio contexto funciona como provider — `<MeuContexto value={valor}>`. A forma antiga, `<MeuContexto.Provider value={valor}>`, continua funcionando, mas está sendo descontinuada. Este projeto usa React 19 e adota a forma nova.

### Estrutura do projeto de exemplo

Neste projeto podemos ver o Context aplicado nestes arquivos:

- [ThemeContext](./src/contexts/ThemeContext.js): cria o contexto com `createContext` e define o componente `ThemeProvider`, que guarda o estado do tema.
- [App](./App.js): coloca o `ThemeProvider` **acima** do `NavigationContainer`, para que **todas** as telas enxerguem o contexto.
- [MenuScreen](./src/screens/MenuScreen.js) e [ThemeScreen](./src/screens/ThemeScreen.js): telas que leem **e** alteram o tema, sem receber nenhuma prop para isso.
- [Form](./src/components/Form.js): componente que consome o `ThemeContext` com o hook `useContext`.

Repare que o contexto fica em um arquivo próprio (`src/contexts`). Declarar o contexto dentro de uma tela e importá-lo a partir de um componente cria um acoplamento desnecessário e facilita a criação de ciclos de importação.

### Valor padrão do contexto

O argumento de `createContext` é o valor usado **apenas** quando um componente chama `useContext` sem nenhum provider acima dele na árvore. Não é o valor inicial do provider:

```js
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { }
})
```

Se existe um provider acima, o valor dele é que vale — o padrão é ignorado.

### Atualizando o contexto

Um contexto não é apenas leitura. Para permitir que qualquer componente altere o valor, coloque o estado no provider e publique **o valor e a função que o altera** juntos:

```js
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}
```

Quem consome o contexto recebe os dois:

```js
const { theme, toggleTheme } = useContext(ThemeContext)
```

### Armadilhas

Da [documentação do React](https://react.dev/reference/react/useContext#caveats):
> - O provider precisa estar **acima** do componente que faz a chamada de `useContext`. Um componente nunca lê o contexto do provider declarado nele mesmo.
> - O React re-renderiza automaticamente todos os filhos que usam um determinado contexto a partir do provider que recebe um valor diferente.
> - Passar algo via contexto só funciona se o `AlgumContexto` usado para prover e o `AlgumContexto` usado para ler forem exatamente o mesmo objeto, comparados com `===`.

## Exercício

Atualize seu [App do Rick and Morty](../08-consuming-a-rest-api/README.md#exercícios) com a nova estrutura abaixo:

![Exercise](../assets/exerciseMockExtended.drawio.png)

Você deve implementar dois contextos. O primeiro armazena o nome do usuário. O segundo controla o tema aplicado.

Devemos conseguir alternar o tema entre claro e escuro em qualquer tela, e mostrar o nome do usuário nas telas seguintes ao login. Use o componente [CheckBox](https://reactnative.dev/docs/checkbox.html) para alternar o tema.

Dicas:
- Coloque os dois providers no `App.js`, acima do `NavigationContainer`.
- Cada contexto deve ter seu próprio arquivo em `src/contexts`.
- Não esqueça de atualizar os estilos para os dois temas.

## Referências
- [Documentação do useContext](https://react.dev/reference/react/useContext)
- [Documentação do createContext](https://react.dev/reference/react/createContext)
- [Passando dados profundamente com Context](https://react.dev/learn/passing-data-deeply-with-context)
- [Escalando com Reducer e Context](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Componente CheckBox](https://reactnative.dev/docs/checkbox.html)
