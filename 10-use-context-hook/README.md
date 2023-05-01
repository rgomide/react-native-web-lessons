# useContext Hook

- [Introduction](#introduction)
- [References](#references)

## Introduction

This hook allows you to read and subscribe to context from your React component. We can read and subscribe to a context by calling `useContext` at the top level of our components:

```js
import { useContext } from 'react';

const MyComponent = () => {
  const context = useContext(SomeContext);
  // ...
}
```

We need to create a context above the component using the [createContext](https://react.dev/reference/react/createContext) function.

### Caveats
- The `Context.Provider` needs to be **above** the component doing `useContext` call.

## References
- [useContext documentation](https://react.dev/reference/react/useContext)
- [createContext documentation](https://react.dev/reference/react/createContext)