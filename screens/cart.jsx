import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Header } from "../components/header";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow } from "../icons/arrow.jsx";
import { SafeAreaView } from "react-native";
import { Card } from "../components/card";

export const Cart = () => {
  const [button, setButton] = useState(false);

  const onPress = () => {
    console.log("Botón presionado");
    setButton(true);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header label={"Todos los productos"} />
        <Text>Cart</Text>
        <Card></Card>
        <View style={styles.totalContainer}>
          <Text>Total a Pagar</Text>
          <Text>xxxxx $</Text>
        </View>
        <ButtonSlide onPress={onPress} icon={Arrow}>
          Ir a Pagar
        </ButtonSlide>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    justifyContent: "space around",
    padding: 24,
    backgroundColor: "#D3B398",
    gap: 20,
  },
  totalContainer: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 24,
  },
});
