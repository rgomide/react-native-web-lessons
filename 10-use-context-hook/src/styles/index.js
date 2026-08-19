import { StyleSheet } from "react-native"

// Plain object: these are colors, not styles. StyleSheet.create expects a flat
// map of style objects, so values like a button color do not belong in it.
const palette = {
  dark: {
    background: 'black',
    text: 'white',
    button: 'gray'
  },
  light: {
    background: 'white',
    text: 'black',
    button: 'black'
  }
}

const createStyles = (colors) => StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: colors.background
  },
  formView: {
    marginVertical: 5
  },
  buttonView: {
    marginVertical: 2
  },
  text: {
    color: colors.text
  }
})

export const themes = {
  dark: {
    colors: palette.dark,
    styles: createStyles(palette.dark)
  },
  light: {
    colors: palette.light,
    styles: createStyles(palette.light)
  }
}
