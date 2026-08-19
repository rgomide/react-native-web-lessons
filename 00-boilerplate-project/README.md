# Modelo de projeto
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

## Sumário
- [O que é este projeto](#o-que-é-este-projeto)
- [Como usar este modelo](#como-usar-este-modelo)
- [Scripts disponíveis](#scripts-disponíveis)
- [O que já vem instalado](#o-que-já-vem-instalado)
- [Criar um projeto Expo do zero com suporte a web](#criar-um-projeto-expo-do-zero-com-suporte-a-web)
- [Referências](#referências)

## O que é este projeto

Este é o projeto base usado nas lições deste repositório. A tela inicial (`App.js`) está vazia, mas as dependências mais usadas ao longo do curso (navegação, requisições HTTP, recursos do dispositivo) **já estão instaladas** — assim você não precisa repetir a instalação a cada lição.

O projeto usa o **Expo SDK 57** com **React 19** e **React Native 0.86**.

## Como usar este modelo

1. Verifique se você tem o [Node.js](https://nodejs.org/) instalado (versão LTS).
2. Copie esta pasta para um novo diretório com o nome do seu projeto.
3. Dentro da nova pasta, instale as dependências:
```bash
npm install
```
4. Inicie a aplicação no navegador:
```bash
npm run web
```

> **Nota:** durante o `npm install` o npm pode exibir avisos de *peer dependency* (`npm warn ERESOLVE`). Eles são esperados e não impedem a instalação. Só use `npm install --force` se a instalação realmente falhar.

## Scripts disponíveis

| Script | Comando | Descrição |
| --- | --- | --- |
| `npm run web` | `expo start --web` | Executa a aplicação no navegador |
| `npm start` | `expo start` | Inicia o servidor de desenvolvimento (escolha a plataforma no terminal ou pelo Expo Go) |
| `npm run android` | `expo start --android` | Abre a aplicação em um emulador/dispositivo Android |
| `npm run ios` | `expo start --ios` | Abre a aplicação em um simulador iOS (somente macOS) |

## O que já vem instalado

Além do núcleo do Expo (`expo`, `expo-status-bar`, `expo-splash-screen`) e do suporte a web (`react-dom`, `react-native-web`, `@expo/metro-runtime`):

- **Navegação**: `@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`, `react-native-safe-area-context`
- **Requisições HTTP**: `axios`
- **Recursos do dispositivo**: `expo-crypto`

Se você não for usar alguma dessas bibliotecas, pode removê-la do `package.json`.

## Criar um projeto Expo do zero com suporte a web

Caso prefira começar de um projeto realmente em branco, sem as bibliotecas acima:

1. Crie o projeto com o template `blank`:
```bash
npx create-expo-app@latest --template blank
```
> Para fixar a mesma versão usada nas lições, use `--template blank@sdk-57`.

2. Instale as dependências de suporte a web:
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

3. Execute o projeto:
```bash
npm run web
```

## Referências
- [Develop websites with Expo](https://docs.expo.dev/workflow/web/#getting-started)
- [Create a project (Expo)](https://docs.expo.dev/get-started/create-a-project/)
- [Templates do `create-expo-app`](https://docs.expo.dev/more/create-expo/)
