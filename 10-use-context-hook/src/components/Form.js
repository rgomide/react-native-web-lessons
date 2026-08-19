import { useContext } from "react"
import { View, Text, Button } from "react-native"
import { ThemeContext } from "../contexts/ThemeContext"
import { themes } from "../styles"

// Form is BELOW the provider declared in App.js, so it can read the context.
const Form = () => {
  const { theme } = useContext(ThemeContext)
  const { colors, styles } = themes[theme]

  return (
    <View style={styles.formView}>
      <Text style={styles.text}>This is my theme: {theme}</Text>
      <Button color={colors.button} title="Sign up" />
    </View>
  )
}

export default Form
