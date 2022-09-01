# List Building With Style

This lesson will show how to build lists using the `FlatList` element. Check [ListScreen.js](./src/screens/ListScreen.js) to more detail.
## The FlatList element

- Turns an array into a list of elements
- We are required to pass in a `prop` of `data` - the array of dta that we are going to create a bunch of elements out of
- Also required to pass in a `renderItem` prop - function that will turn each individual item into an element
- If you are coming from React on the web, you might be used to `mapping` an array of data to build a list. FlatList is better with React Native

![Array to List of Friends](../assets/2022-09-01-19-59-40.png)

## Why set a key property?

If we modify the list, for example, deleting one element. 

![behavior without a key being provided](../assets/2022-09-01-20-16-09.png)

React will update elements when we have a key for each element. 

![behavior with key](../assets/2022-09-01-20-18-37.png)

## Solving the key issue

The first way is set the key property to the original object as shown in [ListScreenKeyManually.js](./src/screens/ListScreenKeyManually.js).