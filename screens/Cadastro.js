import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  

  const handleCadastro = () => {
    if (!email.includes('@')) {
      alert('Por favor, insira um endereço de email válido.');
      return; 
    }
    if (senha === confirmarSenha) {
      console.log('Nome:', nome);
      console.log('Email:', email);
      console.log('Senha:', senha);
      console.log('Confirmar Senha:', confirmarSenha);
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    }
  };

  return (

    

    <View style={styles.container}>
     <Image source={require('../assets/LogoEuVou1.png')}/>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
        onChangeText={(text) => setConfirmarSenha(text)}
      />
      <TouchableOpacity style={styles.buttonCadastro} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A020F0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF'
  },
  input: {
    backgroundColor: '#FFF',
    width: '85%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  buttonCadastro: {
    backgroundColor: '#A020F0',
    borderColor: '#A9A9A9',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    shadowColor: '#171717',
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
     color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
