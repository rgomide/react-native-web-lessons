# AsyncStorage

## Sumary
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Migrating from v2 to v3](#migrating-from-v2-to-v3)
- [References](#references)

## Introduction

AsyncStorage uses the local storage of devices to save content. The official [React Native AsyncStorage](https://reactnative.dev/docs/asyncstorage) is deprecated, so we are using a 3rd party library called [@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage).

This project uses **version 3.1.1**, which introduced a new API: instead of importing a single global object, we create a storage instance with `createAsyncStorage`. Each instance is bound to its own database (SQLite on Android/iOS, IndexedDB on web), so you can keep data from different contexts separated in the same app.

## Installation

```bash
npm install @react-native-async-storage/async-storage@3.1.1
```

## Usage

Values are stored as `key -> value` pairs, always as `string`. First we create the storage instance, then we use the `setItem` and `getItem` functions.

```javascript
import { createAsyncStorage } from '@react-native-async-storage/async-storage'

const storage = createAsyncStorage('lessons')

await storage.setItem('someKey', 'some value!')
const value = await storage.getItem('someKey') // 'some value!' or null
```

For objects and arrays, keep using `JSON.stringify` when writing and `JSON.parse` when reading:

```javascript
const user = { id: 1, name: 'Denecley' }

await storage.setItem('user', JSON.stringify(user))
const userFromStorage = JSON.parse(await storage.getItem('user'))
```

To read or write several keys at once, use `getMany` and `setMany`:

```javascript
await storage.setMany({
  users: JSON.stringify(arrayOfUsers),
  someKey: 'some value!'
})

const entries = await storage.getMany(['users', 'someKey'])
// { users: '[...]', someKey: 'some value!' }
```

Errors are thrown as `AsyncStorageError`, which exposes the `type` and `errorMessage` properties:

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

Check [App.js](./App.js) for a basic usage example.

## Functions

According to the [API documentation](https://react-native-async-storage.github.io/latest/api/usage/), the instance created by `createAsyncStorage` has these public functions:
- `getItem(key)`: returns the stored `string` or `null`
- `setItem(key, value)`: writes a value
- `removeItem(key)`: removes a key
- `getMany(keys)`: returns an object `{ key: value | null }`
- `setMany(entries)`: writes several keys from an object
- `removeMany(keys)`: removes several keys
- `getAllKeys()`: returns every stored key
- `clear()`: wipes all data of that storage

## Migrating from v2 to v3

| v2 | v3 |
| --- | --- |
| `import AsyncStorage from '...'` | `const storage = createAsyncStorage('database-name')` |
| `multiGet(keys)` (returns array of pairs) | `getMany(keys)` (returns an object) |
| `multiSet(pairs)` | `setMany(object)` |
| `multiRemove(keys)` | `removeMany(keys)` |
| `mergeItem` / `multiMerge` | removed — read, merge in JS and write again |
| `useAsyncStorage` | removed — use the instance directly |

The `export default` still exists in v3, but it points to the legacy storage (v2 data) and is meant only as a migration path — the recommended usage is `createAsyncStorage`.

## Exercise

In this exercise, you will be implementing a React Native project with at least 5 screens that consume data from an open API. Additionally, you will explore the use of useState, useEffect, and useContext hooks to manage state and data flow within your application.

### Requirements:

- Create a React Native project that includes the 5 screens desbribed in next topic.
- The screens should be connected through a navigation stack using React Navigation.
- Your application should consume data from an open API. You can choose any API ([public-apis](https://github.com/public-apis/public-apis)) that provides data relevant to your application.
- You should use the `fetch` function to make API requests and handle responses (remember to use `await response.json()` to read the response body and to check `response.ok` before using the data).
- Use `useState` hook to manage state within your components. You should use this hook to store data retrieved from the API and any other stateful data required by your application.
- Use `useEffect` hook to manage side effects within your components. You should use this hook to fetch data from the API and perform any other side effects required by your application.
- Use `useContext` hook to manage global state within your application. You should use this hook to share state and data between components that are not directly related in the component tree.

### Required Screens:

1. `Home screen`: Display a list of items retrieved from the API. This screen should demonstrate the use of useState, useEffect, and useContext hooks.
2. `Detail screen`: Display the details of an item selected from the Home screen. This screen should demonstrate the use of props to pass data between screens.
3. `Search screen`: Allow users to search for items based on a keyword. This screen should demonstrate the use of TextInput and search functionality.
4. `Favorites screen`: Display a list of items that have been marked as favorites by the user. This screen should demonstrate the use of `AsyncStorage` to persist data between sessions.
5. `Settings screen`: Allow users to configure settings for the application. This screen should demonstrate the use of checkboxes, switches, and other input components. Save these settings using `AsyncStorage`.

## References

- [AsyncStorage Github repo](https://github.com/react-native-async-storage/async-storage)
- [Usage Documentation](https://react-native-async-storage.github.io/latest/api/usage/)
- [Migration to v3 guide](https://react-native-async-storage.github.io/latest/migration-to-3/)
- [Database naming](https://react-native-async-storage.github.io/latest/api/db-naming/)
- [Error handling](https://react-native-async-storage.github.io/latest/api/errors/)
- [Usage with Expo](https://react-native-async-storage.github.io/latest/integrations/expo/)
- [public-apis](https://github.com/public-apis/public-apis)
