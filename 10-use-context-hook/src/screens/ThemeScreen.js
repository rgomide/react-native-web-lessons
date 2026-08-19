import { useContext } from "react"
import { View, Button } from "react-native"
import { ThemeContext } from "../contexts/ThemeContext"
import { themes } from "../styles"
import Form from "../components/Form"

const ThemeScreen = () => {
  // The context gives us both the current value and a way to update it.
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { colors, styles } = themes[theme]

  return (
    <View style={styles.mainView}>
      <Form />
      <Button color={colors.button} title="Switch theme" onPress={toggleTheme} />
    </View>
  )
}

export default ThemeScreen
