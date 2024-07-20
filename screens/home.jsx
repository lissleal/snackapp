import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories } from "../components/categories";
import { theme } from "../config/theme";

export const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Bienvenido a tu app de Snacks Saludables </Text>
      <Image
        source={require("../assets/images/garabatos.jpg")}
        style={styles.imagen}
      />

      <Categories style={styles.categorias} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 20,
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginHorizontal: 16,
    fontFamily: "Inter",
    color: theme.colors.gray[500],
  },
  imagen: {
    height: 100,
    resizeMode: "repeat",
  },
});
