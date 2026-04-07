import { View, Text, Button } from "react-native"

const LoginScreen = (props) => {
  const navigation = props.navigation

  const goToHome = () => {
    navigation.navigate('Home')
  }

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </View>
  )
}

export default LoginScreen