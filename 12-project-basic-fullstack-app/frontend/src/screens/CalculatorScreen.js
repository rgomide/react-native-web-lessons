import { Button, StyleSheet, Text, View } from "react-native";

const CalculadoraScreen = () => {

  const onCalculate = async (operation) => {
    const url = `http://localhost:3000/operations/${operation}/10/20`;
    const response = await fetch(url);
    const data = await response.json();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator, value A = 10 and value B = 20</Text>
      <Button title="Sum" color="green" onPress={() => onCalculate('sum')} />
      <Button title="Subtraction" color="red" onPress={() => onCalculate('subtraction')} />
      <Button title="Multiplication" color="orange" onPress={() => onCalculate('multiplication')} />
      <Button title="Division" color="blue" onPress={() => onCalculate('division')} />
      <Button title="Invalid Operation" color="gray" onPress={() => onCalculate('invalid-operation')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalculadoraScreen;