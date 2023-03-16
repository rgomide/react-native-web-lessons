# State Introduction

- [Introduction](#introduction)
- [Counter Screen](#counter-screen)
    - [Planning the state variables](#planning-the-state-variables)
    - [Few notes on state](#few-notes-on-state)
- [Color Screen](#color-screen)
- [Color Mix Screen](#color-mix-screen)
- [Using Reducer to manage state](#using-reducer-to-manage-state)
- [Exercise](#exercise)
- [References](#references)

## Introduction

In this lesson we will learn about states. States in React are used to re-render the screen content. We can bind state variables as components paramters or to part of an internal logic.

As seen in image below, states are a system to track a piece of data that will change over time. If the data changes, our app will re-render.

![](../assets/2022-10-23-22-09-14.png)

In this project we have three projects with that use states variables.

## Counter Screen

This example is relates to [CounterScreenWrong](./src/screens/CounterScreenWrong.js) and [CounterScreen](./src/screens/CounterScreen.js) screens.

It is a simple counter that can be increased or decreased by pressing the related buttons.

![](../assets/2022-10-23-22-10-32.png)

The `CounterScreenWrong` implements this feature declaring the `counter` variable and updating this value in `onPress` events.

If you test this screen, you will check it doesn't works. It happens because the screen contet are not binded to variables. React will re-render the screen only for state variables.

So we need to use state variables to reach our goal.

### Planning the state variables

Before start using the state variables, we need to think about the required ones. It is more about strategy and organization, because complex screens may use a lot of state variables and we don't want more complexity to maintain our codebase.

It is a great strategy answer these next three questions:

1. What piece of data is changing in our app?
2. What type of data is it?
3. What is the data's starting (default) value?

![](../assets/2022-10-23-22-11-42.png)

For the counter screen we need to update the `current count` value. This type of data can be a `number`. Finally, this value is initiallized as `zero`.

The image below demonstrates the three answers for this problem.

![](../assets/2022-10-23-22-12-39.png)

The next example is a screen that shows a name typed in a `TextInput` component and shows this value in a `Text` element.

In this case we need to keep updating the name value. So the state variable is the `name`, this type is a `string` and the initial value is an empty string `''`.

![](../assets/2022-10-23-22-13-53.png)

The last example is a screen that reads a collection of blog posts from a data source. Since it is a dynamic data, we need to update the `blogPosts` as an `array` type. Also we can initialize as an empty array `[]`.

![](../assets/2022-10-23-22-14-56.png)

### Few notes on state

- We are using function-based state in a functional component. React also has class-based components that have access to [state](https://reactjs.org/docs/faq-state.html).
- We *never* directly modify a state variable. React doesn't detect this change! Only use the `setter` function.
- We can name the state variable anything we wish.
- We can track any kind of data that changes over time - a number, string, array of ojects, etc.
- When a component is rerendered, *all of its children get rerendered too*.
- A state variable can be passed to a child component! At that point, the state variable is now being used as `props`.

## Color Screen

In the [ColorScreen](./src/screens/ColorScreen.js) we are creating random colors by pressing the `Add Color` button.

![](../assets/2022-10-23-22-49-16.png)

Here we need the to update the `colors` value. So we will use an `array of strings` as state variable with an empty array as default value.

![](../assets/2022-10-23-22-50-46.png)

In [ColorScreen](./src/screens/ColorScreen.js) we need to pay attention at some lines of code.

First of all, we need to import the `useState` Hook. According to [React documentation](https://reactjs.org/docs/hooks-state.html#whats-a-hook): 

> A Hook is a special function that lets you "hook into" React features. For example, `useState` is a Hook that lets you add React state to function components.

The next step is declare the state variable and his setter function. In the code line below we have the `colors` variable and the `setColors` setter function. 

The default value is passed as an argument of `useState` function call.

```js
const [colors, setColors] = useState([])
```

We have to call the `setColors` function to update the `colors` state variable. Here is an example to put elements into `colors` state variable:

```js
setColors(['red', 'green', '#0a03ff'])
```

After call this function, the screen will rerender assuming the `['red', 'green', '#0a03ff']` is assigned to `colors` value.

So in [ColorScreen](./src/screens/ColorScreen.js) we are adding a new `rgb` color into `colors` by pressing the `Add Color` button.

The auxliary `randomRgb` function is called in `onPress` event and returns a random color.

Finally, the `FlatList` element points to `colors` as a data source. This component renders a `View` with the random `backgroundColor` and a `Text` showing the color value.

## Color Mix Screen

The [ColorMixScreen](./src/screens/ColorMixScreen.js) is our third example that shows how to plan and use states in a complex point of view.

In this screen we are building our color configuring the amount of `red`, `green` and `blue`. 

![](../assets/2022-10-23-23-22-46.png)

Answering the three main questions, we have to update the data by each color component. So, we will have the `red`, `green` and `blue` state variables.

These variables are `number` and the initial value is `255`.

![](../assets/2022-10-23-23-24-26.png)

We have the [ColorCounter](./src/components/ColorCounter.js) component to avoid ambiguous code. This component have the callbacks for `Increase` and `Decrease` actions.

Now we can start to think where should we have to create the state variables? In screen or component?

![](../assets/2022-10-23-23-35-41.png)

![](../assets/2022-10-23-23-36-13.png)

Generally, we create state variables in the most parent component that needs to read or change a state value.

![](../assets/2022-10-23-23-37-40.png)

In this example, we are passing a callback function as a `prop` to change the color component state.

![](../assets/2022-10-23-23-39-37.png)

In [ColorMixScreen](./src/screens/ColorMixScreen.js) we passed the `onIncrease` and `onDedrease` callbacks to update the current color component. Also, we passed the color component in the `color` props just to show the color label to user.

```js
<ColorCounter
    onIncrease={() => setColor(blue, COLOR_INCREMENT, setBlue)}
    onDecrease={() => setColor(blue, -1 * COLOR_INCREMENT, setBlue)}
    color='Blue'
/>
```

The `setColor` function validates the color adjustment because the range of the each color component should be between `0` and `255`. When the new color component value is allowed, we update the color component state with the new value.

## Using Reducer to manage state

Reducer is a hook that allow us to manage a state in a function. The [ColorMixReducerScreen](./src/screens/ColorMixReducerScreen.js) is a refactored version of the previous example.

### Quick Thoughts
1. App workgs right now - we could leave it as is! But we could make it slightly better...
2. We have three separate pieces of state
3. For this app, these three pieces of state are extremely related*
4. There is a precise set of well-known ways in which we update these values*

`*`: This makes our state a great candidate for being managed by a `reducer`.

### Reducer - function that manages changes to an object!?!?
- Real fancy name
- Function that gets called with two objects
- Argument 1 - Object that has all of our state in it
- Argument 2 - Object that describes the update we want to make
- We look at ARgument 2 and use it to decide how to change Argument 1
- Two technicalities
    1. We never change Argument 1 directly.
    2. We must always return a value to be used as Argument 1

Refactoring `ColorMixScreen`:
- Remove state references
- Delete `setColor` function
- Import `useReducer`
```js
import React, { useReducer } from 'react'
```
- Declare a new reducer
```js
const [state, dispatch] = useReducer(reducer, { red: 255, green: 255, blue: 255 })
```
- Implement the `reducer` function
```js
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  const { colorToChange, amount } = action
  const currentColorValue = state[colorToChange]

  if (currentColorValue + amount <= 255 && currentColorValue + amount >= 0) {
    const newState = { ...state }
    newState[colorToChange] = currentColorValue + amount
    return newState
  } else {
    return state
  }
}
```
- Update `ColorCounter` increase/decrease actions
```js
<ColorCounter
  onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
  onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
  color='Red'
/>
```

## Exercise

...

## References
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [useState Hook](https://beta.reactjs.org/reference/react/useState)
- [useReducer Hook](https://beta.reactjs.org/reference/react/useReducer)