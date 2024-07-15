import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../components/categories";

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Bienvenido a tu app de Snacks Saludables </Text>
      <Image
        source={require("../assets/images/logosnacks.png")}
        style={styles.imagen}
      />

      <Categories />
    </SafeAreaView>
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
    fontSize: 30,
    fontWeight: "500",
    marginHorizontal: 16,
    fontFamily: "Inter",
  },
  imagen: {
    width: 300,
    height: 150,
  },
});
