# Boilerplate Project
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

## Table of contents
- [What this project is](#what-this-project-is)
- [How to use this template](#how-to-use-this-template)
- [Available scripts](#available-scripts)
- [What is already installed](#what-is-already-installed)
- [Creating an Expo project from scratch with web support](#creating-an-expo-project-from-scratch-with-web-support)
- [References](#references)

## What this project is

This is the base project used across the lessons in this repository. The initial screen (`App.js`) is empty, but the libraries used most often throughout the course (navigation, HTTP requests, device features) are **already installed**, so you don't have to install them again in every lesson.

The project runs on **Expo SDK 57** with **React 19** and **React Native 0.86**.

## How to use this template

1. Make sure you have [Node.js](https://nodejs.org/) installed (LTS version).
2. Copy this folder into a new directory named after your project.
3. Inside the new folder, install the dependencies:
```bash
npm install
```
4. Start the application in the browser:
```bash
npm run web
```

> **Note:** `npm install` may print peer dependency warnings (`npm warn ERESOLVE`). They are expected and do not break the installation. Only use `npm install --force` if the installation actually fails.

## Available scripts

| Script | Command | Description |
| --- | --- | --- |
| `npm run web` | `expo start --web` | Runs the application in the browser |
| `npm start` | `expo start` | Starts the dev server (pick the platform in the terminal or through Expo Go) |
| `npm run android` | `expo start --android` | Opens the application on an Android emulator/device |
| `npm run ios` | `expo start --ios` | Opens the application on an iOS simulator (macOS only) |

## What is already installed

Beyond the Expo core (`expo`, `expo-status-bar`, `expo-splash-screen`) and web support (`react-dom`, `react-native-web`, `@expo/metro-runtime`):

- **Navigation**: `@react-navigation/native`, `@react-navigation/native-stack`, `react-native-screens`, `react-native-safe-area-context`
- **HTTP requests**: `axios`
- **Device features**: `expo-crypto`

If you are not going to use one of these libraries, feel free to remove it from `package.json`.

## Creating an Expo project from scratch with web support

If you prefer to start from a truly blank project, without the libraries listed above:

1. Create the project using the `blank` template:
```bash
npx create-expo-app@latest --template blank
```
> To pin the same version used in the lessons, use `--template blank@sdk-57`.

2. Install the web support dependencies:
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```

3. Run the project:
```bash
npm run web
```

## References
- [Develop websites with Expo](https://docs.expo.dev/workflow/web/#getting-started)
- [Create a project (Expo)](https://docs.expo.dev/get-started/create-a-project/)
- [`create-expo-app` templates](https://docs.expo.dev/more/create-expo/)
