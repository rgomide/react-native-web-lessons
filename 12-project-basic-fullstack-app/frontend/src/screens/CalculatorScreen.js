import { Button, StyleSheet, Text, View } from "react-native";

const CalculadoraScreen = () => {

  const onCalculateByGet = async (operation) => {
    const url = `http://localhost:3000/operations/${operation}/10/20`;
    const response = await fetch(url);
    const data = await response.json();
    alert(JSON.stringify(data, null, 2));
  };

  const onCalculateByPost = async (operation) => {
    const url = `http://localhost:3000/calculate`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ operation, valueA: 10, valueB: 20 })
    });
    const data = await response.json();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator, value A = 10 and value B = 20</Text>

      <Text style={styles.subtitle}>GET /operations/:operation/:valueA/:valueB</Text>
      <Button title="Sum" color="green" onPress={() => onCalculateByGet('sum')} />
      <Button title="Subtraction" color="red" onPress={() => onCalculateByGet('subtraction')} />
      <Button title="Multiplication" color="orange" onPress={() => onCalculateByGet('multiplication')} />
      <Button title="Division" color="blue" onPress={() => onCalculateByGet('division')} />
      <Button title="Invalid Operation" color="gray" onPress={() => onCalculateByGet('invalid-operation')} />

      <Text style={styles.subtitle}>POST /calculate</Text>
      <Button title="Sum" color="green" onPress={() => onCalculateByPost('sum')} />
      <Button title="Subtraction" color="red" onPress={() => onCalculateByPost('subtraction')} />
      <Button title="Multiplication" color="orange" onPress={() => onCalculateByPost('multiplication')} />
      <Button title="Division" color="blue" onPress={() => onCalculateByPost('division')} />
      <Button title="Invalid Operation" color="gray" onPress={() => onCalculateByPost('invalid-operation')} />
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
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalculadoraScreen;