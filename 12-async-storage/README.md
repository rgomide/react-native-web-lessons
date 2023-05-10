# Async Storage

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

## Reference

- [AsyncStorage Github repo](https://github.com/react-native-async-storage/async-storage)
- [Usage Documentation](https://react-native-async-storage.github.io/async-storage/docs/usage)