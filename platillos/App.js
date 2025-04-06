
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#ff6600' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Platillos" component={HomeScreen} />
        <Stack.Screen name="Detalle" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}