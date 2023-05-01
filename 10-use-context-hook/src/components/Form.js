import { useContext } from "react";
import { styles } from "../styles"
import { ThemeContext } from "../screens/ThemeScreen";
import { View, Text, Button } from "react-native";

// Form component is above ThemeContext.Provider
const Form = () => {
  const theme = useContext(ThemeContext)
  const componentStyle = styles[theme]
  
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={componentStyle.form.text}>This is my theme: {theme}</Text>
      <Button color={componentStyle.buttonColor} title="Sign up" />
    </View>
  );
}

export default Form