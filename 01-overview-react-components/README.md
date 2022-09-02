# Overview of React components

- [Components](#components)
- [Rules of JSX](#rules-of-jsx)
- [Exercise](#exercise)
## Components

A React component could be analyzed by 4 parts:

1. Import libraries
2. Create a component. A component is a function that returns some JSX
3. Create a stylesheet to style our component
4. Export the component so we can use it elsewhere in our project

Check [ComponentScreen.js](./src/screens/ComponentScreen.js) for more details. Also, [App.js](./App.js) is using the custom component.
## Rules of JSX

- We can assemble different JSX elements like normal HTML
- We configure different JSX elements using `props`
- We can refeer to JS variables inside of a JSX block by using curly braces
- We can assign JSX elements to a variable, then show that variable inside of a JSX block

## Exercise

1. Create a new component called `LessonComponent` that:
    - Show two Text elements
    - The first should say `Getting started with React Native!` and have a font size of `45`
    - The second should say `My name is <your name>` and have a font size of `20`
    - For the second text element, assign your name to a variable, then print it up in the JSX element
    - Replace `App.js` to show your component