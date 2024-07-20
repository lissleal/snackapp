import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { formatPrice } from "../utils/price";
import { theme } from "../config/theme";
import { Trash } from "../icons/trash";

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
        source={require("../assets/images/papasybebida.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.text}>Cantidad: {quantity}</Text>
        <Text style={styles.text}>Precio: {formatPrice(price)}</Text>
      </View>
      <Pressable style={styles.delete} onPress={() => onDelete(id)}>
        <Trash />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    height: 110,
    borderWidth: 2,
    borderColor: theme.colors.primary[400],
    borderRadius: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textProduct: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  delete: {
    padding: 8,
    alignItems: "center",
  },
});
