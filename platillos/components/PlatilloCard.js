import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

export default function PlatilloCard({ platillo, onPress, isHorizontal }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, isHorizontal && styles.cardHorizontal]}>
      <Image
        source={{ uri: platillo.foto }}
        style={isHorizontal ? styles.imageHorizontal : styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{platillo.nombre}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {platillo.descripcion}
        </Text>
        <Text style={styles.region}>{platillo.region} • {platillo.categoria}</Text>
      </View>
    </TouchableOpacity>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    flex: 1,
    flexDirection: 'column',
    maxWidth: screenWidth - 20,
  },
  cardHorizontal: {
    flexDirection: 'row',
    maxWidth: screenWidth / 2 - 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  imageHorizontal: {
    width: 120,
    height: '100%',
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  region: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
});
