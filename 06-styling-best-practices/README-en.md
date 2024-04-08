# Styling Best Practices
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

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

The `styles` variable was created adding two classes `mainView` and `paragraph`. In [src/screens/simple-style/index.js](./src/screens/simple-style/index.js) we are importing and using these styles:

```js
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const SimpleStyleScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum cupiditate recusandae omnis non, praesentium sint obcaecati consectetur ipsa,
        necessitatibus enim a quaerat magnam quam assumenda maxime ducimus nobis ut quisquam.
      </Text>
    </View>
  )
}

export default SimpleStyleScreen
```

## Global stylesheet

For complex projects you can create a styleguide to be shared in screens and component. The [/src/styles](./src/styles/) folder contains this setup. In this structure we have the `index.js` file as main file that aggregates the styles files.

Each style file correponds to a speciffic context such as colors, typography, containers...

Let's check the [ComplexStyle](./src/screens/complex-style/) screen. This screen's style inherits the general style and add a new `warning` style:

```js
import { StyleSheet } from "react-native"
import { general, colors } from "../../styles"

const styles = StyleSheet.create({
  ...general,
  warning: {
    color: colors.warning
  }
})

export default styles
```

The `general` content was cloned using the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

As shown in the previous session, the styles were imported in `index.js` and applied to screen's components.

```js
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const ComplexStyleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Title</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum cupiditate recusandae omnis non, praesentium sint obcaecati consectetur ipsa,
          necessitatibus enim a quaerat magnam quam assumenda maxime ducimus nobis ut quisquam.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Second Section</Text>
        <Text style={[styles.paragraph, styles.warning]}>
          Harum cupiditate recusandae omnis non.
        </Text>
      </View>
    </View>
  )
}

export default ComplexStyleScreen
```

## Exercise

Refactor the exercise developed in [Navigation between screens - Exercise](../03-navigation-between-screens#exercise) section with new folders and styling strategy.

## References
- [Styling in React: 5 ways to style React apps](https://blog.logrocket.com/styling-react-5-ways-style-react-apps/#sass-css-stylesheets-react)
- [Como organizar estilos no React Native](https://blog.rocketseat.com.br/como-organizar-estilos-no-react-native/)
- [React Native Styling: Structure for Style Organization](https://thoughtbot.com/blog/structure-for-styling-in-react-native)
