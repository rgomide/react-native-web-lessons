# React Native Lessons
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.md)
[![en](https://img.shields.io/badge/lang-en-red.svg)](./README-en.md)

The mini projects of these lessons are based in `The Complete React Native + Hooks` course from Stephen Grider.

## Summary

- [Boilerplate Project](00-boilerplate-project)
- [Overview React Components](01-overview-react-components)
- [List Building With Style](02-list-building-with-style)
- [Navigation Between Screens](03-1-navigation-between-screens)
- [Building Reusable Components](04-building-reusable-components)
- [Layout With React Native](05-layout-with-react-native)
- [Styling Best Practices](06-styling-best-practices)
- [State Introduction](07-state-introduction)
- [Consuming a REST API](08-consuming-a-rest-api)
- [Exploring devices features](09-expo-device)
- [useContext Hook](10-use-context-hook)
- [AsyncStorage](11-async-storage)

## How to run the projects

1. Make sure that you have `Node.js` installed
    - Access [Node.js](https://nodejs.org/) and download the last stable version
2. Open your favorite terminal and navigate to some project folder
3. Run `npm install`
4. Run `npm run web`
5. Enjoy!

## Troubleshooting

### `ERR_0SSL_EVP_UNSUPPORTED` error
Use `--openssl-legacy-provider` flag to initialize scripts in `package.json`. Replace `web` script with:
- macOS: 
```json
"web": "NODE_OPTIONS=--openssl-legacy-provider expo start --web"
```
- Windows: 
```json
"web": "SET NODE_OPTIONS=--openssl-legacy-provider && expo start --web"
```

[Reference](https://stackoverflow.com/questions/69719601/getting-error-digital-envelope-routines-reason-unsupported-code-err-oss)

## External References
- [Node.js](https://nodejs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Web docs](https://necolas.github.io/react-native-web/docs/)
- [Babel](https://babeljs.io)
- [Stephen's Grider React Native repository](https://github.com/StephenGrider/rn-casts)
- [Udemy: The Complete React Native + Hooks Course](https://www.udemy.com/course/the-complete-react-native-and-redux-course)