import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ContaBancaria } from './src/contaBancaria';

export default function App() {
  const [saldo, setSaldo] = useState(0);


  return (
    <View style={styles.container}>
      <Text>Logomarca</Text>
      <br></br>
      <Text>Seu saldo: {saldo}</Text>
      <br></br>
      <Button title="Depositar"></Button>
      <br></br>
      <Button title="Debitar"></Button>
      <br></br>
      <Button title="Extrato"></Button>
      <br></br>
      <Button title="Extrato Especial"></Button>
      <br></br>
      <Button title="Cheque Especial"></Button>
      <br></br>
      <Button title="Poupança"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'red',
    borderWidth: 1,
  }
});
