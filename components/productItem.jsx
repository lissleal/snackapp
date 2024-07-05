import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import theme from "../config/theme";

export const ProductItem = ({ name, category, price, description }) => {
  const onPress = () => {
    console.log("Botón presionado");
  };
  return (
    <Pressable style={styles.productItem}>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textDescription}>{description}</Text>
        <Text style={styles.textPrice}>{price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: 120,
    width: 350,
    borderWidth: 1,
    borderColor: "#D3B398",
    borderRadius: 20,
    padding: 10,
  },
  textContainer: {
    flex: 2,
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
    flex: 1,
  },
});
