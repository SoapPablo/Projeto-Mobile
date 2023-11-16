import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from '../screens/Login';
import EsqueceuSenha from '../screens/EsqueceuSenha';
import Cadastro from '../screens/Cadastro';
import BuscarEventos from '../screens/BuscarEvento';
const Stack = createStackNavigator();

const NavegacaoPilha = (props) => {
  return (
      <Stack.Navigator initialrouteName={'Login'}>
        <Stack.Screen
          name="Login"
          component={() => <Login onLogin={props.onLogin} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#A020F0',
            },
          }}
        />
        <Stack.Screen
          name="EsqueceuSenha"
          component={EsqueceuSenha}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: '#A020F0',
            },
          }}
        />
        <Stack.Screen name="BuscarEventos" component={BuscarEventos} />
      </Stack.Navigator>
  );
};

export default NavegacaoPilha;
