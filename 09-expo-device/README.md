# Exploring devices features

- [Introduction](#introduction)
- [Expo Camera](#expo-camera)
- [References](#references)

## Introduction

In this project we will explore the most common device's resources.

## Expo Camera

The `expo-camera` package allow us to use the built in camera of our devices. In this package we have the `Camera` component to render the camera preview and methods to interact. 

The [CameraScreen](./src/screens/camera-screen/index.js) component have the basic usage to setup the camera. 

An important detail is related to request permission using the [Camera.useCameraPermissions()](https://docs.expo.dev/versions/latest/sdk/camera#usecamerapermissionsoptions) hook:

```js
const [permission, requestPermission] = Camera.useCameraPermissions()
```

- `permission`: is a [PermissionResponse](https://docs.expo.dev/versions/latest/sdk/camera/#permissionresponse) object.
- `requestPermission`: is a reference to [requestCameraPermissionsAsync](https://docs.expo.dev/versions/latest/sdk/camera/#camerarequestcamerapermissionsasync) method. With this method we can ask permission anytime. This function is called when we fire this hook.

Since our app have permission to use the built-in camera, we can check the `<Camera/>` component. The basic `props` is the `type` that could be either `CameraType.front` or `CameraType.back`.

There are a lot of interesting features to be explored in `Camera` component such as barcode scanning, face detection and  zoom control. Check the [official documentation](https://docs.expo.dev/versions/latest/sdk/camera/) to more details.


## References
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/)