# Layout With React Native

- [Introduction](#introduction)
- [Box screen](#box-screen)
- [Align items with Flex](#alignitems-with-flex)
- [Flex direction](#flex-direction)
- [Justify content](#justify-content)
- [Flex values](#flex-values)
- [Align Self on children](#align-self-on-children)
- [The Position property](#the-position-property)
- [Top, bottom, left and right](#top-bottom-left-and-right)
- [Exercise](#exercise)
- [References](#references)
## Introduction

Basically, we have three different layout approaches:

- Box object model
- Flex box
- Position

The image bellow shows a comparison about these three kinds of layout systems:

![](../assets/2022-10-08-21-17-38.png)

## Box screen

In this project, we have the [BoxScreen.js](src/screens/BoxScreen.js) screen to show the basics about the `Box Object Model`.

This approach is similar than HTML box model. For each object, we have the margin, border, padding and content sections as shown in image bellow:

![](../assets/2022-10-08-21-34-12.png)

By default, all native elements have margin, borden and padding equals to zero.

We can adjust any part of these settings per sides (`top`, `bottom`, `right` or `left`).

![](../assets/2022-10-08-21-41-38.png)

![](../assets/2022-10-08-21-44-04.png)

Also, we can use shorcut properties giving the `all sides`, `horizontal` or `vertical` settings.

![](../assets/2022-10-08-21-46-34.png)

In [BoxScreen.js](src/screens/BoxScreen.js) file we have these properties applied in two components. The first component is a `View` with this properties:

```js
borderWidth: 3,
borderColor: 'black'
```

Also, we have a `Text` object with:

```js
borderWidth: 10,
borderColor: 'red',
margin: 20,
paddingVertical: 10
```

Running this example we can check the spaces mainy in `Text` component. There are different settings for border, margin and padding.

## AlignItems with Flex

We use the Flex Box approach to position multiple elements with a common parent.

The [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) screen is using Flex Box to build de layout of views.

In this file, each `View` have three `Text` components:

![](../assets/2022-10-08-22-33-09.png)

The first `View` (parent view) have the default value for the `alignItems` property. The default value is `'stretch'`.

![](../assets/2022-10-08-22-44-03.png)

The next `View` have the `alignItems` equals to `flex-start`. It means that each component will keep at the start of container and the `width` is only the required space to render the component content.

![](../assets/2022-10-08-22-52-16.png)

We can use the `center` value for `alignItem`. It will put all elements aligned to the center.

![](../assets/2022-10-08-22-54-49.png)

And finally, we use the `flex-end` property to align all children elements at the end of the container.

![](../assets/2022-10-08-22-58-03.png)

## Flex direction

This property give us control about the elements direction. The elements can be placed vertically (default behavior) or horizontally.

![](../assets/2022-10-08-23-01-06.png)

In image above we can check how to use the `flexDirection` property and the two allowed values (`column` or `row`).

We can check this property in the `View` container with `viewStyleRow` style in [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) file.

The `alignItems` will also change the direction reference when we use the `row` value. The image bellow show how `alignitems` is rendered for both `flexDirection` settings.

![](../assets/2022-10-08-23-07-42.png)
## Justify content

The `justifyContent` layus out children along the primary axis. Primary axis is whatever `flexDirection` is set to.

We have these possible values:

- flex-start
- flex-end
- center
- space-between
- space-around
- space-evenly

The effect of each `justifyContent` value is shown in image bellow:

![](../assets/2022-10-08-23-26-48.png)

In [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) we can check the `View` with the `viewStyleJustifyContent` style. This style have `justifyContent: 'space-evently'` property. It apply the same spaces beetween and outside the elements.
## Flex values

For parent elements we saw the `alignItems`, `justifyContent` and `flexDirection` properties. In this section we will learn about the `flex` and `alignSelf` children properties.

![](../assets/2022-10-08-23-36-11.png)

The `flex` property makes a child in a parent to take as much space as possible. This property is also used to set the proportion of each children calculating the sum of `flex` values and giving the relative percentage for each element.

We can see this property in action in `View` element with `` style in  [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) screen.

The two first `Text` elements have the `flexOne` style (`flex: 1 `) and the third element have the `flexTwo` style (`flex: 2`). The total value of `flex` values is 4. It means the first and two elements have 25% of space and the last element 50%.
## Align Self on children

The `alignSelf` property on children essentially overwrites the parent `alignItems` value. So we can deffine the alignment per child.

Check the `View` with `viewStyleStrech` style in [FlexBoxScreen.js](src/screens/FlexBoxScreen.js) file. In this example we applied the `alignSelf: 'center'` property in the second element. 

## The Position property

The `position` allows to set how a single element gets laid out inside of a parent. The default value is `position: 'relative'` and we use the `position: 'absolute'` property to override Box object Model and Flex Box.

In this project we have the [PositionScreen.js](src/screens/PositionScreen.js) to show this layout approach in action.

The second `Text` element inside the `View` have the `position: 'absolute'` value.

## Top, bottom, left and right
The `top`, `bottom`, `left` and `right` properties can be used in any single element to displace it by this reference (absolute or relative). In the [PositionScreen.js](src/screens/PositionScreen.js) we added the `topTen` style to second element. This element is displaced from parent top by 10 pixels.

## Applying layout systems

The diagram bellow give us an idea about when we use each kind of layout system. Note that we can combine them.

![](../assets/2022-10-09-00-35-55.png)

## Exercise

Create a new screen with the specifications bellow:

![](../assets/2022-10-09-00-50-47.png)

## References
- [Layout with Flexbox](https://reactnative.dev/docs/flexbox)
- [Layout props](https://reactnative.dev/docs/layout-props)
- [Yoga Playground](https://yogalayout.com/playground)
- [The Full React Native Layout Cheat Sheet
](https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c)