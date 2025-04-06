// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Alert, 
  StyleSheet, 
  Button, 
  Image, 
  Pressable,
  useWindowDimensions
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [appointments, setAppointments] = useState([]);
  const { width } = useWindowDimensions(); // 👈 Se adapta automáticamente

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadAppointments);
    return unsubscribe;
  }, [navigation]);

  const loadAppointments = async () => {
    const data = await AsyncStorage.getItem('appointments');
    if (data) setAppointments(JSON.parse(data));
  };

  const deleteAppointment = (id) => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de eliminar esta cita?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive', 
          onPress: async () => {
            const updated = appointments.filter(item => item.id !== id);
            setAppointments(updated);
            await AsyncStorage.setItem('appointments', JSON.stringify(updated));
          }
        },
      ]
    );
  };

  const numColumns = width > 600 ? 2 : 1; // 👈 se actualiza dinámicamente

  return (
    <View style={styles.container}>
      
      {/* Parte superior: Imagen y botón */}
      <View style={styles.header}>
        <Image 
          source={require('../screens/img/carrito.jpeg')} 
          style={styles.logo} 
        />
        <Pressable 
          style={styles.addButton} 
          onPress={() => navigation.navigate('AddAppointment')}
        >
          <Text style={styles.addButtonText}>Agregar Cita</Text>
        </Pressable>
      </View>

      {/* Lista de citas */}
      <FlatList
        data={appointments}
        key={numColumns} // 👈 necesario para que se regenere FlatList
        numColumns={numColumns}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('EditAppointment', { appointment: item })}
          >
            <Text style={styles.title}>{item.clientName}</Text>
            <Text>{item.vehicleModel}</Text>
            <Text>{item.date} {item.time}</Text>
            <Button title="Eliminar" onPress={() => deleteAppointment(item.id)} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay citas registradas.</Text>
        }
        contentContainerStyle={appointments.length === 0 && styles.emptyContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 70,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    margin: 8,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
});
