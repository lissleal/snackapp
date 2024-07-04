import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Card = () => {
  const onPress = () => {
    console.log("Botón presionado");
  };
  return (
    <View style={styles.card}>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>Wipala Snacks almendra chocolate</Text>
        <Text style={styles.textDescription}>Barra Proteinas</Text>
        <Text style={styles.textPrice}>1300 $</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: 120,
    width: 350,
    backgroundColor: "#D3B398",
  },
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
  textProduct: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 12,
  },
  imagen: {
    height: 110,
    width: 110,
  },
});
