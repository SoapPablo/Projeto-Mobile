import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';

const DataPickerCaseiro = () => {
  const [selectedDia, setSelectedDia] = useState('Dia');
  const [selectedMes, setSelectedMes] = useState('Mes');
  const [selectedAno, setSelectedAno] = useState('Ano');
  const [selectedHora, setSelectedHora] = useState('Hora');
  const [selectedMin, setSelectedMin] = useState('Min');
  const [selectedDuracao, setSelectedDuracao] = useState('Duracao');
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.textInfo}>Data do evento:</Text>
      </View>
      <View style={styles.container2}>
        <Picker
          selectedValue={selectedDia}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedDia(itemValue)}>
          <Picker.Item label="Dia" value="Dia" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
        </Picker>
        <Picker
          selectedValue={selectedMes}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedMes(itemValue)}>
          <Picker.Item label="Mês" value="Mes" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
        </Picker>
        </View>
        <View style={styles.container}>
        <Picker
          selectedValue={selectedAno}
          style={styles.picker2}
          onValueChange={(itemValue, itemIndex) => setSelectedAno(itemValue)}>
          <Picker.Item label="Ano" value="Ano" />
          <Picker.Item label="2023" value="2023" />
          <Picker.Item label="2024" value="2024" />
          <Picker.Item label="2025" value="2025" />
        </Picker>
      <View style={styles.container}>
      <Text style={styles.textInfo}>Horários do evento:</Text>
      </View>
      </View>
      <View style={styles.container2}>
        <Picker
          selectedValue={selectedHora}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedHora(itemValue)}>
          <Picker.Item label="Hora" value="Hora" />
          <Picker.Item label="0" value="0" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="1" value="1" />
        </Picker>
        <Picker
          selectedValue={selectedMin}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedMin(itemValue)}>
          <Picker.Item label="Min" value="Min" />
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
          <Picker.Item label="32" value="32" />
          <Picker.Item label="33" value="33" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="41" value="41" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="46" value="46" />
          <Picker.Item label="47" value="47" />
          <Picker.Item label="48" value="48" />
          <Picker.Item label="49" value="49" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="51" value="51" />
          <Picker.Item label="52" value="52" />
          <Picker.Item label="53" value="53" />
          <Picker.Item label="54" value="54" />
          <Picker.Item label="55" value="55" />
          <Picker.Item label="56" value="56" />
          <Picker.Item label="57" value="57" />
          <Picker.Item label="58" value="58" />
          <Picker.Item label="59" value="59" />
        </Picker>
        </View>
        <View style={styles.container}>
        <Picker
          selectedValue={selectedDuracao}
          style={styles.picker2}
          onValueChange={(itemValue, itemIndex) => setSelectedDuracao(itemValue)}>
          <Picker.Item label="Duração" value="Duracao" />
          <Picker.Item label="1 Hora" value="1h" />
          <Picker.Item label="2 Horas" value="2h" />
          <Picker.Item label="3 Horas" value="3h" />
          <Picker.Item label="4 Horas" value="4h" />
          <Picker.Item label="5 Horas" value="5h" />
          <Picker.Item label="6 Horas" value="6h" />
          <Picker.Item label="7 Horas" value="7h" />
          <Picker.Item label="8 Horas" value="8h" />
          <Picker.Item label="9 Horas" value="9h" />
          <Picker.Item label="10 Horas" value="10h" />
          <Picker.Item label="11 Horas" value="11h" />
          <Picker.Item label="12 Horas" value="12h" />
          <Picker.Item label="1 Dia" value="1d" />
          <Picker.Item label="2 Dias" value="2d" />
          <Picker.Item label="3 Dias" value="3d" />
          <Picker.Item label="4 Dias" value="4d" />
          <Picker.Item label="5 Dias" value="5d" />
          <Picker.Item label="6 Dias" value="6d" />
          <Picker.Item label="7 Dias" value="7d" />
        </Picker>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '40%',
    fontSize: 16,
    color: 'purple',
    backgroundColor: '#ccc',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    justifyContent: 'center',
  },
  picker2: {
    height: 50,
    width: '60%',
    fontSize: 16,
    color: 'purple',
    backgroundColor: '#ccc',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfo: {
    padding: 20,
    textAlign: 'center',
  },
});

export default DataPickerCaseiro;