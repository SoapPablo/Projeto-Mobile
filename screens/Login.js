import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function Login(props) {
  const navigation = useNavigation();
  const [offset] = React.useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = React.useState(new Animated.Value(0));
  const [logo] = React.useState(new Animated.ValueXY({ x: 110, y: 110 }));
  const [emailValido, setEmailValido] = useState(true);
  const [senhaValida, setSenhaValida] = useState(true);
  const [mensagemErro, setMensagemErro] = useState('');

  const handleEntrar = () => {
    // const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // const emailValido = emailRegex.test(email);
    // const senhaValida = senha.length >= 6;

    // if (emailValido && senhaValida) {
      // Navegue para a tela "BuscarEventos"
      props.onLogin();
      // navigation.navigate('BuscarEventos');
      // setMensagemErro('');
    // } else {
    //   setEmailValido(emailValido);
    //   setSenhaValida(senhaValida);
    //   setMensagemErro('Email ou senha inválidos.');
    // }
  };

  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };

  const navigateToEsqueceuSenha = () => {
    navigation.navigate('EsqueceuSenha');
  };

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, { toValue: 0, speed: 4, bounciness: 20 }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  },);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../assets/LogoEuVou1.png')}
        />
      </View>

      <Text style={styles.titulo}>Login</Text>

      <Animated.View
        style={[
          styles.container,
          { opacity: opacity, transform: [{ translateY: offset.y }] },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType={'email-address'}
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        {!emailValido && (
          <Text style={styles.errorMessage}>Email inválido</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder={'Senha'}
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
        />

        {!senhaValida && (
          <Text style={styles.errorMessage}>
            A senha deve ter pelo menos 6 caracteres
          </Text>
        )}

        <TouchableOpacity style={styles.buttonAcessar} onPress={handleEntrar}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={navigateToCadastro}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSenha}
          onPress={navigateToEsqueceuSenha}>
          <Text style={styles.senhaText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        {mensagemErro !== '' && (
          <Text style={styles.errorMessage}>{mensagemErro}</Text>
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A020F0',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    paddingBottom: 10,
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
  buttonAcessar: {
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
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
  },
  buttonSenha: {
    marginTop: 5,
    alignSelf: 'center',
  },
  senhaText: {
    color: '#a1a1a1',
  },
});