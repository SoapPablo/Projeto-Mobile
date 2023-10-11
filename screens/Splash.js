import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';


const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Meu App</Text>
      <ActivityIndicator size={'large'} color={''}/>
    </View>
  );
};

export default Splash;