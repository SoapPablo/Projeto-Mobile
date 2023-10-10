import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { Avatar, Button } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.imagem}
        size={150}
        source={require('../assets/avatar1.png')}
      />
      <Text>Nome do Usuário</Text>
      <Button
        style={styles.button}
        icon={() => <AntDesign name="picture" size={24} color="white" />}
        mode="contained"
        onPress={() => console.log('Trocar Foto Pressionado')}>
        Trocar Foto
      </Button>
      <Button
        style={styles.button}
        icon={() => <FontAwesome5 name="user-lock" size={24} color="white" />}
        mode="contained"
        onPress={() => console.log('Trocar Senha Pressionado')}>
        Trocar Senha
      </Button>
      <Button
        style={styles.buttonRed}
        icon={() => <AntDesign name="logout" size={24} color="white" />}
        mode="contained"
        onPress={() => console.log('Sair da conta Pressionado')}>
        Sair da conta
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    marginTop: 20,
  },
  button: {
    margin: 5,
    justifyContent: 'center',
    shadowColor: '#000',
  },
  buttonRed: {
    margin: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    shadowColor: '#000',
  },
});

export default Perfil;
