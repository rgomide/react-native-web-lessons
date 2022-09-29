# Building Reusable Components

- [Introduction](#introduction)
- [Component reuse with props](#component-reuse-with-props)
- [Parent-Child relationships](#parent-child-relationships)
- [Communication from Parent to Child](#communication-from-parent-to-child)

## Introduction

In this lesson we will learn how to create reusable components. Sometimes we want to use the same component in different places of our project. In this case we can repeat a lot of code or create a single reusable component.

So we will learn how to build a component, communicate from parent to child element and pass parameters as props.

## Component reuse with props

We are trying to use best practices to reuse the same block of code as components. 

This repo will sove the problem bellow. We have a component called that shows an image and a title.

![](../assets/2022-09-29-13-44-00.png)

We can solve this scenario working on two different approaches:
- Same group of elements, repeating the same JSX three times over
- Create a separated component

So we will create a shared `ImageDetail` component with `title` and `image` props.

![](../assets/2022-09-29-13-47-44.png)

## Parent-Child relationships

The reusable components could be created inside [src/components](src/components/) directory. The idea is create a single component that could reused in any screen. We have the [ImageDetail.js](src/components/ImageDetail.js) file inside this folder. This is our component. 

Now we are able to use it in any place of our project. The first thing to do is import the component on the top of the file where we want to use it. We can check this import in [ImageScreen.js](src/screens/ImageScreen.js) file.

## Communication from Parent to Child

Now we can start passing parameters from Parent to Child using props. In `Parent` component, we can declare the props as a tag attribute. In `Child` component we can get all props on the first component argument function. 

This is an example:

- Parent:
```js
<ImageDetail title="Mountain"/>
```

- Child:
```js
const ImageDetail = (props) => {
    console.log(props)
    return <Text>Image Detail</Text>
}
```

In this case `Parent` is passing `title` as a prop and `Child` is receiving all props in `props` argument.