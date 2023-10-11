import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Appbar, TextInput } from 'react-native-paper';
import { useState } from 'react';

import DataPickerCaseiro from '../components/DataPickerCaseiro';

const CriarEventos = () => {
  const [nomeEvento, setNomeEvento] = useState('');
  const [subTitulo, setSubTitulo] = useState('');
  const [descricaoEvento, setDescricaoEvento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [selectedFaixaEtaria, setSelectedFaixaEtaria] =
    useState('naFaixaEtaria');
  const [selectedBebidas, setSelectedBebidas] = useState('naBebidas');
  const [selectedFumante, setSelectedFumante] = useState('naFumante');
  const [selectedTipoEvento, setSelectedTipoEvento] = useState('naTipoEvento');

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View>
        <Appbar.Header style={styles.appBar}>
          <Appbar.Action onPress={() => {}} />
          <Appbar.Content title="Criar Eventos" />
        </Appbar.Header>
        <View>
          <Image
            source={require('../assets/palestra1.jpg')}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.textinput}
            type="outlined"
            label="Nome do Evento"
            value={nomeEvento}
            onChangeText={setNomeEvento}
          />
          <TextInput
            style={styles.textinput}
            type="outlined"
            label="Sub Título"
            value={subTitulo}
            onChangeText={setSubTitulo}
          />
          <TextInput
            style={styles.textinputdesc}
            label="Descrição do evento"
            value={descricaoEvento}
            onChangeText={setDescricaoEvento}
            maxLength={500}
            multiline={true}
            numberOfLines={4}
          />
          <Picker
            selectedValue={selectedFaixaEtaria}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFaixaEtaria(itemValue)
            }>
            <Picker.Item label="Selecione a faixa etária" value="option1" />
            <Picker.Item label="+18" value="+18" />
            <Picker.Item label="Livre para todos os públicos" value="livre" />
          </Picker>
          <Picker
            selectedValue={selectedBebidas}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedBebidas(itemValue)
            }>
            <Picker.Item
              label="Selecione o Consumo de bebidas"
              value="option1"
            />
            <Picker.Item label="Bar no local" value="bar" />
            <Picker.Item label="Leve sua bebida" value="leveBebida" />
            <Picker.Item
              label="Proibido bebidas alcoólicas"
              value="proibidoBebida"
            />
          </Picker>
          <Picker
            selectedValue={selectedFumante}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedFumante(itemValue)
            }>
            <Picker.Item
              label="Selecione a regra para fumantes"
              value="option1"
            />
            <Picker.Item label="Permitido fumar" value="permitidoFumar" />
            <Picker.Item label="Proibido fumar" value="proibidoFumar" />
            <Picker.Item
              label="Local com fumódromo"
              value="localComFumodromo"
            />
            <Picker.Item label="Hookah" value="Hookah" />
          </Picker>
          <Picker
            selectedValue={selectedTipoEvento}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedTipoEvento(itemValue)
            }>
            <Picker.Item label="Selecione o tipo do evento" value="option1" />
            <Picker.Item label="Casamento" value="Casamento" />
            <Picker.Item label="Aniversário" value="Aniversario" />
            <Picker.Item label="Formatura" value="Formatura" />
            <Picker.Item label="Festas e shows" value="FestasEShows" />
            <Picker.Item label="Churrasco" value="Churrasco" />
            <Picker.Item label="Campeonatos" value="Campeonatos" />
            <Picker.Item label="Stand Up Comedy" value="StandUpComedy" />
            <Picker.Item
              label="Esportes e atividades físicas"
              value="EsportesEAtividadesFisicas"
            />
            <Picker.Item label="E-sports e online" value="E-sportsEAnline" />
            <Picker.Item
              label="Reuniões e palestras"
              value="ReunioesEPalestras"
            />
          </Picker>
          <DataPickerCaseiro />
          <TextInput
            style={styles.textinput}
            type="outlined"
            label="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => {
              // Lógica aqui
            }}>
            <Text style={styles.buttonText}>Criar Evento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  appBar: {
    backgroundColor: '#a020f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  container: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 5
  },
  textinput: {
    margin: 5,
    borderRadius: 15,
    width: '90%',
  },
  textinputdesc: {
    margin: 5,
    borderRadius: 15,
    height: 200,
    width: '90%',
  },
  picker: {
    width: '90%',
    height: 50,
    fontSize: 16,
    color: 'purple',
    backgroundColor: '#ccc',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    margin: 5,
  },
  mapaPicker: {},
  customButton: {
    width: '90%',
    height: 40,
    backgroundColor: '#a020f0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CriarEventos;
