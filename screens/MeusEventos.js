import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function MeusEventos() {
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

export default MeusEventos;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    maxHeight: 300,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
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
