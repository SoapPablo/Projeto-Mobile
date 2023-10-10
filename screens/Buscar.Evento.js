import { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';


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

const BuscarEventos = ({ navigation }) => {
  // Dados simulados de eventos
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
    {
      title: 'Calourada ADS',
      date: '05/10',
      time: '20hrs',
      description:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      imageSource: require('../assets/festa1.jpg'),
    },
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
  ];

  return (
    <ScrollView style={styles.container}>
      {eventos.map((evento, index) => (
        <EventCard key={index} {...evento} />
      ))}
      <Button
        title="Criar Eventos"
        onPress={() => navigation.navigate('')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 10, // Margem horizontal para alinhar com o Appbar
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
});

export default BuscarEventos;
