# Visão geral sobre componentes React
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

## Sumário
- [O que você vai aprender](#o-que-você-vai-aprender)
- [Componentes](#componentes)
- [Anatomia de um componente React](#anatomia-de-um-componente-react)
- [Regras para JSX](#regras-para-jsx)
- [Exemplos práticos](#exemplos-práticos)
- [Dicas e truques](#dicas-e-truques)
- [Resolução de problemas comuns](#resolução-de-problemas-comuns)
- [Exercícios](#exercícios)
- [Referência](#referência)

## O que você vai aprender

Nesta lição, você aprenderá:
- O que são componentes React e por que são importantes
- Como criar e utilizar componentes básicos
- Como usar JSX para descrever a interface do usuário
- Como aplicar estilos aos seus componentes

## Componentes

Os componentes são os blocos de construção fundamentais de qualquer aplicação React. Um componente encapsula uma parte da interface do usuário e pode ser reutilizado em diferentes partes da aplicação.

**Por que usamos componentes?**
- **Reutilização de código**: Evita repetição e mantém o código organizado
- **Manutenção**: Facilita a correção e atualização de partes específicas da aplicação
- **Separação de responsabilidades**: Cada componente cuida de uma parte específica da interface

## Anatomia de um componente React

Um componente React pode ser analizado em 4 partes principais:

### 1. Importação de bibliotecas
   ```javascript
   import React from 'react';
   import { Text, View, StyleSheet } from 'react-native';
   ```

### 2. Criação do componente: Um componente é uma função que retorna código JSX.
   ```javascript
   function MeuComponente() {
     return (
       <View style={styles.container}>
         <Text style={styles.texto}>Olá, mundo!</Text>
       </View>
     );
   }
   ```

### 3. Criação da folha de estilo para o componente
   ```javascript
   const styles = StyleSheet.create({
     container: {
       padding: 20,
       backgroundColor: '#f0f0f0',
     },
     texto: {
       fontSize: 18,
       color: 'blue',
     },
   });
   ```

### 4. Exportação do componente para uso em outras partes do projeto
   ```javascript
   export default MeuComponente;
   ```

Veja o arquivo completo [ComponentScreen.js](./src/screens/ComponentScreen.js) para um exemplo prático. O arquivo [App.js](./App.js) demonstra como utilizar esse componente.

## Regras para JSX

JSX é uma extensão de sintaxe para JavaScript que parece com HTML, mas com algumas diferenças importantes:

### 1. Elementos JSX
São similares a elementos HTML, mas seguem a convenção camelCase
```jsx
<View style={styles.container}>
```

### 2. Props
Utilizamos propriedades (`props`) para configurar elementos JSX
   ```jsx
   <Text style={styles.titulo} numberOfLines={2}>Meu Título</Text>
   ```

### 3. Expressões JavaScript
Podemos inserir código JS dentro de chaves `{}`
   ```jsx
   <Text>O resultado é: {2 + 2}</Text>
   <Text>Bem-vindo, {nome}!</Text>
   ```

### 4. Variáveis JSX
Elementos JSX podem ser armazenados em variáveis
   ```jsx
   const mensagem = <Text>Olá!</Text>;
   return (
     <View>
       {mensagem}
     </View>
   );
   ```

## Exemplos práticos

### Exemplo 1: Componente simples com texto

```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SaudacaoComponente() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#e8f4f8',
    borderRadius: 5,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});

export default SaudacaoComponente;
```

### Exemplo 2: Componente com variáveis

```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function PerfilComponente() {
  const nome = 'Maria';
  const idade = 25;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={styles.info}>Nome: {nome}</Text>
      <Text style={styles.info}>Idade: {idade} anos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    margin: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PerfilComponente;
```

## Dicas e truques

### 1. Nomeie seus componentes com clareza
Use nomes descritivos que indiquem a função do componente. Como por exemplo: `ButtonComponent`, `HeaderComponent`, `FooterComponent`, etc.

### 2. Um componente por arquivo
Para manter seu código organizado, crie um arquivo separado para cada componente. Normalmente, os componentes são armazenados na pasta `src/components` ou `src/screens`.

### 3. Prefira componentes funcionais
Componentes funcionais são mais simples e beneficiam-se de hooks no React moderno.

## Resolução de problemas comuns

### Problema: "Component is not defined"
**Solução**: Verifique se você importou o componente corretamente no topo do seu arquivo.

### Problema: "Unexpected token" em JSX
**Solução**: Certifique-se de que todas as tags JSX estão corretamente fechadas e que as expressões JavaScript estão entre chaves `{}`.

### Problema: Estilos não sendo aplicados
**Solução**: Verifique se você está passando o objeto de estilo corretamente via prop `style` e se as propriedades de estilo estão escritas em camelCase.

### Problema: "Cannot read property of undefined"
**Solução**: Provavelmente você está tentando acessar uma propriedade de um objeto que ainda não existe. Use operadores de coalescência nula (`?.`) ou verifique se o objeto existe antes de acessar suas propriedades.

## Exercícios

### Exercício 1 - Crie um componente que mostre o seu nome

Crie um novo componente chamado `LessonComponent` que:
- Mostre dois elementos `Text`
- O primeiro deve conter o texto `Iniciando os estudos de React Native!` e ter o tamanho de fonte igual a `45`
- O segundo elemento deve conter o texto `O meu nome é <seu nome>` e ter o tamanho de fonte igual a `20`
- Para o segundo elemento `Text`, atribua o seu nome a uma variável e então mostre o valor dessa variável dentro do elemento JSX
- Manipule o arquivo `App.js` para mostrar o seu componente

### Exercício 2 - Crie um componente que mostre um número aleatório entre 0 e 100

Crie um novo componente chamado `RandomNumberComponent` que:
- Tenha um elemento to tipo [Button](https://reactnative.dev/docs/0.76/button) com o texto `Gerar número aleatório`
- Quando o botão for pressionado, deverá ser exibido um alerta com um número aleatório entre 0 e 100
  - Utilize a função [alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) para exibir o número aleatório
- Manipule o arquivo `App.js` para mostrar o seu componente

## Referência

- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [React Native Components](https://reactnative.dev/docs/0.76/components-and-apis)
- [React Native Style](https://reactnative.dev/docs/style)
- [React Native Layout with Flexbox](https://reactnative.dev/docs/flexbox)