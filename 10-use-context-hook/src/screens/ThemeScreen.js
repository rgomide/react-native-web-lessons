import { createContext, useState } from "react"
import { View, Button } from "react-native"
import { styles } from "../styles"
import Form from "../components/Form"

// Creating the ThemeContext context
export const ThemeContext = createContext('dark')

// Theme screen
const ThemeScreen = () => {
  const [theme, setTheme] = useState('dark')
  const componentStyle = styles[theme]

  return (
    // ThemeContext.Provider is in top level from Form component
    <ThemeContext.Provider value={theme}>
      <View style={componentStyle.theme.mainView}>
        <Form />
        <Button color={componentStyle.buttonColor} title="Switch theme"
          onPress={() => {
            setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
          }}
        />
      </View>
    </ThemeContext.Provider>
  )
}

export default ThemeScreen