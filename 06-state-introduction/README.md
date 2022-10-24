# State Introduction

- [Introduction](#introduction)
- [Screen Counter](#screen-counter)
- [Screen Color](#screen-color)
- [Screen Color Mix](#screen-color-mix)
- [References](#references)

## Introduction

In this lesson we will learn about states. States in React are used to re-render the screen content. We can bind state variables as components paramters or to part of an internal logic.

As seen in image bellow, states are a system to track a piece of data that will change over time. If the data changes, our app will re-render.

![](../assets/2022-10-23-22-09-14.png)

In this project we have three projects with that use states variables.

## Screen Counter

This example is relates to [CounterScreenWrong](./src/screens/CounterScreenWrong.js) and [CounterScreen](./src/screens/CounterScreen.js) screens.

It is a simple counter that can be increased or decreased by pressing the related buttons.

![](../assets/2022-10-23-22-10-32.png)

The `CounterScreenWrong` implements this feature declaring the `counter` variable and updating this value in `onPress` events.

If you test this screen, you will check it doesn't works. It happens because the screen contet are not binded to variables. React will re-render the screen only for state variables.

So we need to use state variables to reach our goal.

### Planning state variables

Before start using the state variables, we need to think about the required ones. It is more about strategy and organization, because complex screens may use a lot of state variables and we don't want more complexity to maintain our codebase.

It is a great strategy answer these next three questions:

1. What piece of data is changing in our app?
2. What type of data is it?
3. What is the data's starting (default) value?

![](../assets/2022-10-23-22-11-42.png)

![](../assets/2022-10-23-22-12-39.png)

![](../assets/2022-10-23-22-13-53.png)

![](../assets/2022-10-23-22-14-56.png)

![](../assets/2022-10-23-22-43-40.png)

## Screen Color

![](../assets/2022-10-23-22-49-16.png)

![](../assets/2022-10-23-22-50-46.png)

## Screen Color Mix

![](../assets/2022-10-23-23-22-46.png)

![](../assets/2022-10-23-23-24-26.png)

Where do we have to create the state variables?

![](../assets/2022-10-23-23-35-41.png)

![](../assets/2022-10-23-23-36-13.png)

![](../assets/2022-10-23-23-37-40.png)

![](../assets/2022-10-23-23-39-37.png)

Callbacks

## References
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)