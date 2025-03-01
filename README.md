# React Native Lessons
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

Os projetos contidos neste repositório foram baseados no curso `The Complete React Native + Hooks` de Stephen Grider.

## Sumário

- [Modelo de projeto](00-boilerplate-project)
- [Visão geral sobre componentes React](01-overview-react-components)
- [Criando listas com estilo](02-list-building-with-style)
- Navegação
  - [Navegação entre telas](03-1-navigation-between-screens)
  - [Navegação por abas](03-2-bottom-tab-navigation/)
  - [Navegação por pilha em cada aba](03-3-stack-navigator-for-each-tab/)
  - [Navegação por gaveta](03-4-drawer-navigation/)
- [Criando componentes reutilizáveis](04-building-reusable-components)
- [Layout com React Native](05-layout-with-react-native)
- [Boas práticas para definição de estilos](06-styling-best-practices)
- [Introdução a estado](07-state-introduction)
- [Consumindo API REST e efeitos colaterais com `useEffect`](08-consuming-a-rest-api)
- [Explorando os recursos do dispositivo](09-expo-device)
- [Hook useContext](10-use-context-hook)
- [AsyncStorage](11-async-storage)

## Como executar os projetos

1. Verifique se você tem o `Node.js` instalado
    - Acesse [Node.js](https://nodejs.org/) e faça o download da última versão estável
2. Abra o seu terminal e navegue até a pasta raiz do seu projeto
3. Execute `npm install`
4. Execute `npm run web`
5. Divirta-se!

## Erros mais comuns

### Permissão para executar comandos `npm` no terminal

Se você receber uma mensagem de permissão para executar comandos `npm` no terminal, execute o seguinte comando:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Error `ERR_0SSL_EVP_UNSUPPORTED`
Utilize a flag `--openssl-legacy-provider` para inicializar os scripts em `package.json`. Substitua o script `web` por:
- macOS: 
```json
"web": "NODE_OPTIONS=--openssl-legacy-provider expo start --web"
```
- Windows: 
```json
"web": "SET NODE_OPTIONS=--openssl-legacy-provider && expo start --web"
```

[Referência](https://stackoverflow.com/questions/69719601/getting-error-digital-envelope-routines-reason-unsupported-code-err-oss)

## Referências externas
- [Node.js](https://nodejs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Web docs](https://necolas.github.io/react-native-web/docs/)
- [Babel](https://babeljs.io)
- [Stephen's Grider React Native repository](https://github.com/StephenGrider/rn-casts)
- [Udemy: The Complete React Native + Hooks Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course)
- [Repositório "Can it be done in React Native?
"](https://github.com/wcandillon/can-it-be-done-in-react-native.git)