import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditAppointmentScreen({ route, navigation }) {
  const { appointment } = route.params;

  const [clientName, setClientName] = useState(appointment.clientName);
  const [vehicleModel, setVehicleModel] = useState(appointment.vehicleModel);
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [description, setDescription] = useState(appointment.description);

  const updateAppointment = async () => {
    if (clientName.length < 3) {
      Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres.');
      return;
    }

    const data = await AsyncStorage.getItem('appointments');
    const appointments = data ? JSON.parse(data) : [];

    const updatedAppointments = appointments.map((a) =>
      a.id === appointment.id
        ? { ...a, clientName, vehicleModel, date, time, description }
        : a
    );

    await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput style={styles.input} value={clientName} onChangeText={setClientName} />
      <Text style={styles.label}>Modelo del Vehículo</Text>
      <TextInput style={styles.input} value={vehicleModel} onChangeText={setVehicleModel} />
      <Text style={styles.label}>Fecha</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />
      <Text style={styles.label}>Hora</Text>
      <TextInput style={styles.input} value={time} onChangeText={setTime} />
      <Text style={styles.label}>Descripción</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} />

      <View style={{ marginTop: 20 }}>
        <Button title="Actualizar Cita" onPress={updateAppointment} color="#4CAF50" />
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
