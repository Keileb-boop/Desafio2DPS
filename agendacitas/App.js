// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddAppointmentScreen from './src/screens/AddAppointmentScreen';
import EditAppointmentScreen from './src/screens/EditAppointmentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Citas' }} />
        <Stack.Screen name="AddAppointment" component={AddAppointmentScreen} options={{ title: 'Agregar Cita' }} />
        <Stack.Screen name="EditAppointment" component={EditAppointmentScreen} options={{ title: 'Editar Cita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
