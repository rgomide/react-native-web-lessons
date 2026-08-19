import { useContext } from 'react'
import { View, Button } from 'react-native'
import { ThemeContext } from '../contexts/ThemeContext'
import { themes } from '../styles'

const MenuScreen = ({ navigation }) => {
  // The same context read from another screen: no prop was passed down.
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { colors, styles } = themes[theme]

  return (
    <View style={styles.mainView}>
      <View style={styles.buttonView}>
        <Button
          color={colors.button}
          onPress={() => { navigation.navigate('Theme') }}
          title="Go to Theme" />
      </View>
      <View style={styles.buttonView}>
        <Button
          color={colors.button}
          onPress={toggleTheme}
          title="Switch theme" />
      </View>
    </View>
  )
}

export default MenuScreen
