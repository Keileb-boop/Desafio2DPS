import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export default function AddAppointmentScreen({ navigation }) {
  const [clientName, setClientName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const saveAppointment = async () => {
    if (clientName.length < 3) {
      Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres.');
      return;
    }

    if (!date || !time) {
      Alert.alert('Error', 'Debe ingresar fecha y hora.');
      return;
    }

    const newAppointment = {
      id: uuid.v4(),
      clientName,
      vehicleModel,
      date,
      time,
      description,
    };

    const data = await AsyncStorage.getItem('appointments');
    const appointments = data ? JSON.parse(data) : [];

    const duplicate = appointments.find(a => a.date === date && a.vehicleModel === vehicleModel);
    if (duplicate) {
      Alert.alert('Error', 'Ya existe una cita para este vehículo en esta fecha.');
      return;
    }

    appointments.push(newAppointment);
    await AsyncStorage.setItem('appointments', JSON.stringify(appointments));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput
        style={styles.input}
        value={clientName}
        onChangeText={setClientName}
      />
      <Text style={styles.label}>Modelo del Vehículo</Text>
      <TextInput
        style={styles.input}
        value={vehicleModel}
        onChangeText={setVehicleModel}
      />
      <Text style={styles.label}>Fecha (DD/MM/AAAA)</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />
      <Text style={styles.label}>Hora (HH:MM)</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />
      <Text style={styles.label}>Descripción del Problema (Opcional)</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Guardar Cita" onPress={saveAppointment} color="#ff4e4e" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
});
