# useContext Hook

- [Introduction](#introduction)
- [useContext](#useContext)
- [Exercise](#exercise)
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

## useContext

In this project we can check how Context is applied checking these files:

- [ThemeScreen](./src/screens/ThemeScreen.js): here we are creating the context with `createContext` function and declaring a `ThemeContext.Provider`.
- [Form](./src/components/Form.js): this component consumes the `ThemeContext` by using the `useContext` hook.

So to use a context remember to:

1. Create a context with `createContext` function.
2. Add a provider above the components that will use the context.
3. Call the `useContext` hook at component level to retrieve the context value.

### Caveats
From the [React documentation](https://react.dev/reference/react/useContext#caveats):
> - The `Context.Provider` needs to be **above** the component doing `useContext` call.
> - React automatically re-renders all the children that use a particular context starting from the provider that receives a different value.
> - Passing something via context only works if `SomeContext` that you use to provide context and `SomeContext` that you use to read it are exactly the same object, as determined by a `===` comparison.

## Exercise

Update your [Rick and Morty App](../08-consuming-a-rest-api/README.md#exercise) with new structure bellow:

![Exercise](../assets/exerciseMockExtended.drawio.png)

You should implement two contexts. First context is to store user name. The second is used to control the applied theme.

We can toggle the theme to dark or light in any screen and we should show the user name in next screens after logon. Use the [CheckBox](https://reactnative.dev/docs/checkbox.html) component to toggle the theme.

Dont't forget to update the styles for both themes.

## References
- [useContext documentation](https://react.dev/reference/react/useContext)
- [createContext documentation](https://react.dev/reference/react/createContext)
- [CheckBox component](https://reactnative.dev/docs/checkbox.html)