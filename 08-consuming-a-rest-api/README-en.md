# Consuming a REST API and side effects with `useEffect`
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)


- [Using the `useEffect` Hook in React Native](#using-the-useeffect-hook-in-react-native)
  - [Introduction to `useEffect`](#introduction-to-useeffect)
  - [The second argument of useEffect](#the-second-argument-of-useeffect)
  - [Examples](#examples)
  - [Best Practices](#best-practices)
  - [Pitfalls to Avoid](#pitfalls-to-avoid)
- [Example screens in this project](#example-screens-in-this-project)
- [HTTP requests with the `fetch` API](#http-requests-with-the-fetch-api)
- [Exercises](#exercises)
- [References](#references)
  - [HTTP calls](#http-calls)
  - [useEffect](#useeffect)
  - [API](#api)

## Using the `useEffect` Hook in React Native

### Introduction to `useEffect`

`useEffect` is a React hook that lets you perform side effects in function components. Side effects are operations that affect the outside world or depend on it, such as fetching data from an API, subscribing to system events, or setting up and clearing timers.

> **Warning:** a lot of the `useEffect` material online was written for React on the web and talks about "manipulating the DOM". There is **no DOM** in React Native: components are translated into native views. Whenever an example uses `document` or `window`, it only works in the browser (through `react-native-web`).

#### The Lifecycle of a React Component

To understand `useEffect` better, it helps to understand the lifecycle of a React component. This cycle includes phases such as rendering, state updates, and running side effects.

1. **Mounting:**
   - The component is created and inserted into the component tree (which React Native translates into native views).
   - `useEffect` runs after the component's initial render.

2. **Updating:**
   - The component may update because of state or prop changes.
   - `useEffect` may run again if the specified dependencies change.
   - **Before each re-run**, React runs the cleanup function of the previous effect. In other words: cleanup does **not** happen only on unmount.

3. **Unmounting:**
   - The component is removed from the component tree.
   - The function returned by `useEffect` runs one last time to clean up any side effect (cleanup).

So, for an effect with dependencies, the real sequence is:

```
render -> effect -> (dependency changes) -> cleanup -> effect -> ... -> (unmount) -> cleanup
```

#### When `useEffect` Runs

- **By default:** `useEffect` runs after the component renders.
- **With dependencies:** it can be configured to run only when certain dependencies change.

#### Basic Syntax

```js
useEffect(() => {
  // Side effect code here

  return () => {
    // Cleanup code here (optional)
  }
}, [dependencies])
```
- The first argument is a function where we place the side effect code.
- The second argument is a dependency array that controls when the effect runs.

### The second argument of useEffect
- `useEffect(() => {})`: Run the arrow function **every time** the component is rendered
- `useEffect(() => {}, [])`: Run the arrow function **only** when the component is rendered for the **first** time
- `useEffect(() => {}, [value])`: Run the arrow function **only** when the component is rendered for the **first** time, **and** every time `value` **changes**.

### Examples

#### 1. Simple Effect That Runs After Every Render

This example shows a `useEffect` that prints a message to the console every time the component renders.

```javascript
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Example1 = () => {
  useEffect(() => {
    console.log('The component was rendered.')
  })

  return (
    <View>
      <Text>Check the console for a message.</Text>
    </View>
  )
}

export default Example1
```

#### 2. Effect With a Dependency

This example shows how to run the effect only when a specific dependency changes.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const Example2 = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log(`The counter changed to: ${counter}`)
  }, [counter])

  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={() => setCounter((current) => current + 1)} />
    </View>
  )
}

export default Example2
```

#### 3. Effect With Cleanup

This example shows how to use the cleanup function to avoid unwanted side effects, such as when setting up a timer.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const Example3 = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)

    // Cleanup function to clear the interval
    return () => clearInterval(interval)
  }, [])

  return (
    <View>
      <Text>Seconds: {seconds}</Text>
    </View>
  )
}

export default Example3
```

### Best Practices

1. **Specify Dependencies Correctly:**

   Always pass every dependency the effect uses in the dependency array. This makes sure the effect runs correctly when those dependencies change.
   ```javascript
   useEffect(() => {
     // code that uses `data`
   }, [data])  // Include `data` in the dependencies
   ```

2. **Proper Cleanup:**

   Always define a cleanup function when your effect sets up something that needs to be torn down, such as event subscriptions, timers, or subscriptions. In React Native we use APIs such as [`Dimensions`](https://reactnative.dev/docs/dimensions) and [`AppState`](https://reactnative.dev/docs/appstate), which return an object with a `remove()` method.
   ```javascript
   import { Dimensions } from 'react-native'

   useEffect(() => {
     const subscription = Dimensions.addEventListener('change', ({ window }) => {
       console.log('New screen size:', window.width, window.height)
     })

     return () => {
       subscription.remove()
     }
   }, [])
   ```

3. **Split Effects:**

   Split complex effects into multiple `useEffect` calls with distinct dependencies. This makes the code easier to read and maintain.
   ```javascript
   useEffect(() => {
     // Effect A code
   }, [dependencyA])

   useEffect(() => {
     // Effect B code
   }, [dependencyB])
   ```

4. **Keep the Effect Code Simple:**

   Try to keep the code inside `useEffect` simple and focused on a single purpose. If the code inside an effect grows too large, consider moving it to a separate function.

5. **Understand the Effect Lifecycle:**

   Remember that `useEffect` runs after rendering, and that effects may run again when their dependencies change. This helps you avoid bugs related to the component lifecycle.

### Pitfalls to Avoid

1. **Forgetting Dependencies:**

   Forgetting to include every dependency in the dependency array can lead to bugs that are hard to track down.
   ```javascript
   useEffect(() => {
     const fetchData = async () => {
       const result = await fetch(url)
       setData(await result.json())
     }

     fetchData()
   }, [url])  // Include `url` so that fetchData is called when `url` changes
   ```

2. **Infinite Loops:**

   Make sure your effect does not cause an infinite render loop. This can happen if you update state inside the effect without setting the dependencies correctly.
   ```javascript
   useEffect(() => {
     setCount(count + 1)  // This causes an infinite loop, since `count` is a dependency
   }, [count])
   ```

3. **Improper Cleanup:**

   Forgetting to clean up effects can lead to unexpected behavior, such as duplicated event subscriptions or memory leaks.
   ```javascript
   useEffect(() => {
     const interval = setInterval(() => {
       console.log('Interval running')
     }, 1000)

     return () => clearInterval(interval)  // Proper interval cleanup
   }, [])
   ```

4. **Using `useEffect` for What Is Just a Calculation:**

   Do not use `useEffect` to derive a value that can be computed during rendering. Storing that value in state only creates an extra render and a duplicated source of truth. Reserve `useEffect` for synchronizing the component with something **external** to React (network, timers, system events, storage).
   ```javascript
   // Avoid this: derived state synchronized by an effect
   const [fullName, setFullName] = useState('')

   useEffect(() => {
     setFullName(`${firstName} ${lastName}`)
   }, [firstName, lastName])

   // Prefer this: compute during rendering
   const fullName = `${firstName} ${lastName}`
   ```

   The opposite is a pitfall too: **never** run a side effect directly in the component body. Rendering must be pure, and the component body may run more than once for the same result on screen.
   ```javascript
   const Component = ({ title }) => {
     // Avoid: side effect during rendering
     Notifications.setBadge(title)

     // Prefer: inside a useEffect
     useEffect(() => {
       Notifications.setBadge(title)
     }, [title])
   }
   ```

5. **Race Conditions in Requests:**

   When an effect fires a request on every dependency change, the responses may arrive **out of order**: an old, slow request can overwrite the result of the most recent one. Use the cleanup function to invalidate the previous request.
   ```javascript
   // Avoid: the response of an old search may overwrite the newest one
   useEffect(() => {
     fetchCharacters(name).then(setResult)
   }, [name])

   // Prefer: the cleanup marks the previous request as outdated
   useEffect(() => {
     let ignore = false

     const search = async () => {
       const data = await fetchCharacters(name)
       if (!ignore) {
         setResult(data)
       }
     }

     search()

     return () => {
       ignore = true
     }
   }, [name])
   ```
   See this pattern applied in the [chars-effect](./src/screens/chars-effect/index.js) screen.

6. **Mutable Dependencies:**

   Avoid using objects or arrays directly as dependencies, since every render creates a new reference, making the effect run over and over. Consider `useMemo` or `useCallback` to memoize complex values or functions.
   ```javascript
   const data = { name: 'John' }

   useEffect(() => {
     // This may cause the effect to run constantly
   }, [data])

   // Prefer
   const memoizedData = useMemo(() => ({ name: 'John' }), [])
   useEffect(() => {
     // Now the effect only runs when memoizedData changes
   }, [memoizedData])
   ```

## Example screens in this project

- [EffectIntroductionScreen](./src/screens/effect-introduction/index.js): a lifecycle demonstration. Open the console and press **Increment Counter** to see the order in which the render, the effects, and the cleanup functions run:

  ```
  COMPONENT RENDERING
  INSIDE useEffect WITH EMPTY ARRAY
  INSIDE useEffect FOR counter STATE
  INCREMENT COUNTER CLICK
  COMPONENT RENDERING
  CLEANUP FUNCTION FOR counter STATE
  INSIDE useEffect FOR counter STATE
  ```

  Note that the effect with an empty array (`[]`) does not run again, and that the cleanup of the `counter` effect happens **before** the effect runs again.

- [MainCharsScreen](./src/screens/main-chars/index.js): the search is triggered manually, by a button. It does not use `useEffect`.
- [CharsEffectScreen](./src/screens/chars-effect/index.js): the same search triggered by `useEffect` on every change of the text input, protected against race conditions.

## HTTP requests with the `fetch` API

[`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) is the standard HTTP request API and ships with React Native — no library to install. It returns a `Promise` that resolves to a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.

```javascript
const response = await fetch('https://rickandmortyapi.com/api/character/')
const data = await response.json()
```

Check the [rick-and-morty](./src/component/api/rick-and-morty/index.js) file and the [MainCharsScreen](./src/screens/main-chars/index.js) component for the full example used in this project.

### Three details that usually catch people coming from Axios

1. **`fetch` does not reject the Promise on HTTP errors.** A 404 or 500 response counts as a successful request from the network's point of view. `catch` only runs on a connection failure. You have to check the [`response.ok`](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) property yourself:
   ```javascript
   const response = await fetch(url)

   if (!response.ok) {
     throw new Error(`Request failed with status ${response.status}`)
   }
   ```

2. **The body does not come parsed.** You must call `await response.json()` (or `.text()`) to read the content. There is no Axios-style `data` property.

3. **There is no timeout.** Without a limit, a request may hang indefinitely. Use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) together with `setTimeout`:
   ```javascript
   const controller = new AbortController()
   const timeoutId = setTimeout(() => controller.abort(), 5000)

   try {
     const response = await fetch(url, { signal: controller.signal })
     return await response.json()
   } finally {
     clearTimeout(timeoutId)
   }
   ```

The same `AbortController` can also cancel the request from a `useEffect` cleanup function, when the component unmounts or the search changes.

## Exercises

### Exercise 1: Consuming an API in React Native

Build a React Native app that consumes data from a public API and displays the information in a list.

1. Requirements:
  - Create a React Native app that uses the `fetch` API to make an HTTP request to a public API.
  - Use the https://jsonplaceholder.typicode.com/posts endpoint to fetch a list of posts.
  - Display the returned data in a FlatList component.
2. Features:
  - Show the title and the body of each post in a card inside the list.
  - Handle request errors and show an appropriate message if something goes wrong when talking to the API.
  - Show a loading indicator ([ActivityIndicator](https://reactnative.dev/docs/activityindicator)) while the request is in flight.

### Exercise 2: Counter With Interval Cleanup

Create a component that increments a counter every second, using `useEffect` to set up and clear the interval.

**Instructions:**
1. Create a function component.
2. Initialize a counter state with the value 0.
3. Use `useEffect` to set up a timer (see [setInterval](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)) that increments the counter every second.
4. Stop the timer (see [clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)) when the component unmounts.

### Exercise 3: Fetching Data From an API

Create a component that fetches data from an API on mount and displays it. Use `useEffect` to perform the fetch and manage the state.

**Instructions:**
1. Create a function component.
2. Initialize states to store the data and possible errors.
3. Use `useEffect` to fetch the data from an API (e.g. [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)) when the component mounts.
4. Protect the effect against race conditions with a cleanup function (see pitfall 5).
5. Display the data or the error message in the component.

### Exercise 4: Conditional Message Display

Create a screen that conditionally displays a message based on state, using `useEffect` to change the navigation header title when the state changes.

**Instructions:**
1. Create a function screen that receives the `navigation` prop.
2. Initialize a boolean state and a button that toggles it.
3. Use `useEffect` to change the header title based on the state value. Use [`navigation.setOptions`](https://reactnavigation.org/docs/navigation-object/#setoptions) — there is no `document.title` in React Native.
   ```javascript
   useEffect(() => {
     navigation.setOptions({ title: active ? 'Active' : 'Inactive' })
   }, [navigation, active])
   ```
4. Conditionally display a message in the screen using a [Text](https://reactnative.dev/docs/text) element.

### Exercise 5: Countdown Timer

Create a component that shows a countdown from an initial value, using `useEffect` to set up and clear the interval, stopping when the counter reaches zero.

**Instructions:**
1. Create a function component.
2. Initialize a state with the counter's initial value taken from a prop called `initialValue`.
3. Use `useEffect` to set up an interval that decrements the counter every second.
4. Stop the timer when the counter reaches zero.

### Exercise 6: Rick And Morty Reference Guide

Improve the example project with additional features according to the mock below:

<p align="center">
  <image src="../assets/exerciseMock.drawio.png"/>
</p>

## References

### HTTP calls
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
- [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [Response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
- [Networking in React Native](https://reactnative.dev/docs/network)

### useEffect
- [useEffect](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

### API
- [Rick and Morty API - Documentation](https://rickandmortyapi.com/documentation)
- [API Rank](https://apirank.dev/)
