# Async Storage

## Sumary
- [Introduction](#introduction)
- [Usage](#usage)
- [Functions](#functions)
- [References](#references)

## Introduction

AsyncStorage uses the local storage of devices to save content. The official React Native AsyncStorage is deprecated, so we are using a 3rd party library called [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage).

This library uses the same mechanism.

## Usage

The values are stored by `key -> value` pairs. Basically we store and read data with `setItem` and `getItem` functions.

Check [App.js](./App.js) for a basic usage example.

## Functions

According to the [API documentation](https://react-native-async-storage.github.io/async-storage/docs/api), we have these public functions:
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

## Exercise

In this homework, you will be implementing a React Native project with at least 5 screens that consume data from an open API. Additionally, you will explore the use of useState, useEffect, and useContext hooks to manage state and data flow within your application.

### Requirements:

- Create a React Native project that includes at least 5 screens.
- The screens should be connected through a navigation stack using React Navigation.
- Your application should consume data from an open API. You can choose any API that provides data relevant to your application.
- You should use Axios to make API requests and handle responses.
- Use useState hook to manage state within your components. You should use this hook to store data retrieved from the API and any other stateful data required by your application.
- Use useEffect hook to manage side effects within your components. You should use this hook to fetch data from the API and perform any other side effects required by your application.
- Use useContext hook to manage global state within your application. You should use this hook to share state and data between components that are not directly related in the component tree.

### Suggestions for Screens:

1. Home screen: Display a list of items retrieved from the API. This screen should demonstrate the use of useState, useEffect, and useContext hooks.
2. Detail screen: Display the details of an item selected from the Home screen. This screen should demonstrate the use of props to pass data between screens.
3. Search screen: Allow users to search for items based on a keyword. This screen should demonstrate the use of TextInput and search functionality.
4. Favorites screen: Display a list of items that have been marked as favorites by the user. This screen should demonstrate the use of AsyncStorage to persist data between sessions.
5. Settings screen: Allow users to configure settings for the application. This screen should demonstrate the use of checkboxes, switches, and other input components.

## References

- [AsyncStorage Github repo](https://github.com/react-native-async-storage/async-storage)
- [Usage Documentation](https://react-native-async-storage.github.io/async-storage/docs/usage)