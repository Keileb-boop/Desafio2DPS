import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Button, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadAppointments);
    return unsubscribe;
  }, [navigation]);

  const loadAppointments = async () => {
    const data = await AsyncStorage.getItem('appointments');
    if (data) {
      setAppointments(JSON.parse(data));
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      '¿Eliminar cita?',
      '¿Estás seguro de eliminar esta cita?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => deleteAppointment(id), style: 'destructive' }
      ]
    );
  };

  const deleteAppointment = async (id) => {
    const updatedAppointments = appointments.filter((item) => item.id !== id);
    setAppointments(updatedAppointments);
    await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EditAppointment', { appointment: item })}
      onLongPress={() => confirmDelete(item.id)}
    >
      <Text style={styles.title}>{item.clientName}</Text>
      <Text style={styles.subtitle}>{item.vehicleModel}</Text>
      <Text style={styles.date}>{item.date} - {item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>





      <Button
        title="Agregar Nueva Cita"
        onPress={() => navigation.navigate('AddAppointment')}
        color="#ff4e68"
      />
      {appointments.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No hay citas registradas aún.</Text>
        </View>
      ) : (
        <FlatList
          data={appointments}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={Dimensions.get('window').width > 600 ? 2 : 1}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  list: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    margin: 10,
    borderRadius: 15,
    elevation: 3,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#aaa',
  },
});
