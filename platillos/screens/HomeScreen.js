import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import PlatilloCard from '../components/PlatilloCard';
import platillos from '../platillos.json';

export default function HomeScreen({ navigation }) {
  const [isHorizontal, setIsHorizontal] = useState(false);

  const handleOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setIsHorizontal(width > height);
  };

  useEffect(() => {
    handleOrientation(); // Detecta orientación inicial
    const subscription = Dimensions.addEventListener('change', handleOrientation);
    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://files.combyne.com/9eLjYEQU_0PDMQbWNOs-A60jZApam4bU_cut.png' }}
        style={styles.logo}
      />

      <FlatList
        data={platillos}
        numColumns={isHorizontal ? 2 : 1}
        key={isHorizontal ? 'h' : 'v'}
        renderItem={({ item }) => (
          <PlatilloCard
            platillo={item}
            isHorizontal={isHorizontal}
            onPress={() => navigation.navigate('Detalle', { platillo: item })}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#F8F8F8',
  },
  list: {
    paddingBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    opacity: 0.8,
  },
});
