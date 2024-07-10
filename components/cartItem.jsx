import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { formatPrice } from "../utils/price";

export const CartItem = ({
  id,
  category,
  image,
  name,
  quantity,
  price,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      />
      <View style={styles.info}>
        <Text style={styles.text}>{category}</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>Cantidad: {quantity}</Text>
        <Text style={styles.text}>Precio: {formatPrice(price)}</Text>
      </View>
      <Pressable style={styles.delete} onPress={() => onDelete(id)}>
        <Text style={styles.deleteText}>Eliminar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    gap: 16,
    padding: 8,
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    flex: 1,
    gap: 5,
  },
  text: {
    fontSize: 12,
  },
  delete: {
    backgroundColor: "#000000",
    padding: 8,
    borderRadius: 8,

    width: 100,
    alignItems: "center",
  },
  deleteText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
