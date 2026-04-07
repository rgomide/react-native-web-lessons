import { View, Text, Button } from "react-native"

const HomeScreen = (props) => {
  const navigation = props.navigation

  const goToUserDetails = () => {
    navigation.navigate('UserDetails')
  }

  const goToAbout = () => {
    navigation.navigate('About')
  }

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to User Details" onPress={goToUserDetails} />
      <Button title="Go to About" onPress={goToAbout} />
    </View>
  )
}

export default HomeScreen