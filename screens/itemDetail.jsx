import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Header } from "../components/header";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Bag } from "../icons/bag.jsx";

export const ItemDetail = () => {
  const [button, setButton] = useState(false);

  const onPress = () => {
    console.log("Botón presionado");
    setButton(true);
  };
  return (
    <View style={styles.container}>
      <Header label="Nombre del Producto" />
      <Image
        style={styles.imagen}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>Wipala Snacks almendra chocolate</Text>
        <Text style={styles.textDescription}>Barra Proteinas</Text>
        <Text style={styles.textPrice}>1300 $</Text>
      </View>
      <ButtonSlide onPress={onPress} icon={Bag}>
        Añadir al carrito
      </ButtonSlide>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: "center",
  },

  imagen: {
    height: 350,
    width: 350,
  },
  textContainer: {
    alignItems: "stretch",
    gap: 20,
    padding: 10,
  },
  textProduct: {
    fontSize: 28,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 14,
  },
  textPrice: {
    fontSize: 24,
  },
});
