import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import NavegacaoAba from './routes/NavegacaoAba';
import NavegacaoPilha from './routes/NavegacaoStack';
import Splash from './screens/Splash'

const App = () => {
  const [exibeSplash, setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 2000);
  }, []);

  return exibeSplash ? (
    // Se estiver exibindo o Splash
    <Splash />
  ) : logado ? (
    // Se o usuário estiver logado
    <NavigationContainer>
      <NavegacaoAba onLogout={handleLogout} />
    </NavigationContainer>
  ) : (
    // Se o usuário não estiver logado
    <NavigationContainer>
      <NavegacaoPilha onLogin={handleLogin} />
    </NavigationContainer>
  );
};

export default App;
