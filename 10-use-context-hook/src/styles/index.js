import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  dark: {
    theme: {
      mainView: {
        flex: 1,
        backgroundColor: 'black'
      }
    },
    form: {
      text: {
        color: 'white'
      }
    },
    buttonColor: 'gray'
  },
  light: {
    theme: {
      mainView: {
        flex: 1,
        backgroundColor: 'white'
      }
    },
    form: {
      text: {
        color: 'black'
      }
    },
    buttonColor: 'black'
  }
})