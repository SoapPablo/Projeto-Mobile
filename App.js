import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import NavegacaoAba from './routes/NavegacaoAba';

const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoAba />
    </NavigationContainer>
  );
};

export default App;
