# Styling Best Practices

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Separated stylesheet from component design](#separeted-stylesheet-from-component-design)
- [Global stylesheet](#global-stylesheet)
- [Exercise](#exercise)
- [References](#references)

## Introduction

In this lesson we will discuss about how to manage our project styling. We will focus mainly in styles based in inline styling with style object variables.

[This article]((https://blog.logrocket.com/styling-react-5-ways-style-react-apps/#sass-css-stylesheets-react)) shows 5 different ways to style React apps pointing the pros and cons of each approach.

## Project Structure

For complex projects we use to separate our packages in contexts. In this project we have two main folders:
- [src/screens](./src/screens/)
- [src/styles](./src/styles/)

The `src/screens` folder contains a folder for each screen in our project. So we have `complex-style`, `simple- style` and `summary` screens.

Each screen have a pair of files: `index.js` and `styles.js`. The component structure is separated from styles objects.

## Separeted stylesheet from component design

Each screen has it own style file. The `styles.js` file exports a style variable created with `StyleSheet.create()` function.

This example is from [src/screens/simple-style/styles.js](./src/screens/simple-style/styles.js):

```js
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    padding: 10
  },
  paragraph: {
    fontStyle: "italic",
    fontWeight: "600"
  }
})

export default styles
```

## Global stylesheet

## Exercise

Empty content

## References
- [Styling in React: 5 ways to style React apps](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/#sass-css-stylesheets-react)
- [Como organizar estilos no React Native](https://blog.rocketseat.com.br/como-organizar-estilos-no-react-native/)
- [React Native Styling: Structure for Style Organization](https://thoughtbot.com/blog/structure-for-styling-in-react-native)