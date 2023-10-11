import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');

  const handleEsqueceuSenha = () => {
    if (!email.includes('@')) {
      alert('Por favor, insira um endereço de email válido.');
      return; 
    }
    console.log('Email para redefinição de senha:', email);
    
  };

  return (
    <View style={styles.container}>
    <Image source={require('../assets/LogoEuVou1.png')}/>
      <Text style={styles.titulo}>Recuperar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.buttonEnviar} onPress={handleEsqueceuSenha}>
        <Text style={styles.buttonText}>Enviar Email de Redefinição</Text>
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
  buttonEnviar: {
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
