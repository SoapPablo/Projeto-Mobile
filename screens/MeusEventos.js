import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity, // Alterado para TouchableOpacity
} from 'react-native';
import * as React from 'react';
import { Dialog, Portal, Provider } from 'react-native-paper'; // Importe Provider do react-native-paper
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function ConfirmadosScreen() {
  const eventos = [
    {
      title: 'Mil ao Milhão',
      date: '23/09',
      time: '19hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/palestra1.jpg'),
    },
    {
      title: 'Casamento do Junin',
      date: '29/09',
      time: '21hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/casamento1.jpg'),
    },
    {
      title: 'Calourada ADS',
      date: '05/10',
      time: '20hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/festa1.jpg'),
    },
    {
      title: 'Casamento do Junin',
      date: '29/09',
      time: '21hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/casamento1.jpg'),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {eventos.map((evento, index) => (
          <EventCard
            key={index}
            title={evento.title}
            date={evento.date}
            time={evento.time}
            description={evento.description}
            imageSource={evento.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function CriadosScreen() {
  const eventos = [
    {
      title: 'Mil ao Milhão',
      date: '23/09',
      time: '19hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/palestra1.jpg'),
    },
  ];
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {eventos.map((evento, index) => (
            <EventCard
              key={index}
              title={evento.title}
              date={evento.date}
              time={evento.time}
              description={evento.description}
              imageSource={evento.imageSource}
            />
          ))}
          <TouchableOpacity style={styles.button} onPress={showDialog}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              CANCELAR EVENTO
            </Text>
          </TouchableOpacity>
        </ScrollView>

        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{ backgroundColor: 'white' }}>
            <Dialog.Title style={{ color: 'black' }}>
              Cancelar Evento
            </Dialog.Title>
            <Dialog.Content>
              <Text style={{ color: 'black' }}>
                Deseja realmente cancelar o evento?
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancelar</Button>
              <Button onPress={hideDialog}>Voltar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}

const EventCard = ({ title, date, time, description, imageSource }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>
        Data: {date} | Horário: {time}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
    </View>
  </View>
);

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: 'purple', // Define a cor de fundo das abas como purple
          },
          indicatorStyle: {
            backgroundColor: 'white', // Define a cor da linha indicadora como white
          },
        }}>
        <Tab.Screen name="Confirmados" component={ConfirmadosScreen} />
        <Tab.Screen name="Criados" component={CriadosScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    maxHeight: 300,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 'auto',
    resizeMode: 'cover',
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  details: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  button: {
    backgroundColor: 'red',
    colors: 'white',
    justifyContent: 'center',
    height: 30,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10,
  },
});
