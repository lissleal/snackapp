import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../components/header";
import { Options } from "../icons/options";
// import { Categories } from '../components/categories';
// import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  // const navigation = useNavigation();
  // const handlePress = () => {
  //   navigation.navigate('AllProducts');
  // };

  return (
    <View style={styles.safeArea}>
      <Header icon={Options} label="Explora nuestras categorías" />
      <Text style={styles.text}>Bienvenido a tu app de Snacks Saludables </Text>
      {/* <Categories onPress={handlePress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    margin: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "500",
    marginHorizontal: 16,
  },
});
