import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function DetailScreen({ route }) {
  const { platillo } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: platillo.foto }} style={styles.image} />
      <Text style={styles.title}>{platillo.nombre}</Text>
      <Text style={styles.region}>🌎 Región: {platillo.region}</Text>
      <Text style={styles.category}>🍽 Categoría: {platillo.categoria}</Text>
      <Text style={styles.price}>💰 Precio: ${platillo.precio.toFixed(2)}</Text>
      <Text style={styles.sectionTitle}>🛒 Ingredientes:</Text>
      {platillo.ingredientes.map((ing, idx) => (
        <Text key={idx} style={styles.ingredient}>• {ing}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  region: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#27ae60',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ingredient: {
    fontSize: 16,
    paddingLeft: 10,
  },
});
