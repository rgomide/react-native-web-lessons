import { Button, StyleSheet, Text, View } from "react-native";

const CalculadoraScreen = () => {

  const onCalcular = async (operacao) => {
    const url = `http://localhost:3000/operacoes/${operacao}/10/20`;
    const response = await fetch(url);
    const data = await response.json();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora, valor A = 10 e valor B = 20</Text>
      <Button title="Soma" color="green" onPress={() => onCalcular('soma')} />
      <Button title="Subtração" color="red" onPress={() => onCalcular('subtracao')} />
      <Button title="Multiplicação" color="orange" onPress={() => onCalcular('multiplicacao')} />
      <Button title="Divisão" color="blue" onPress={() => onCalcular('divisao')} />
      <Button title="Operação Inválida" color="gray" onPress={() => onCalcular('operacao-invalida')} />
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