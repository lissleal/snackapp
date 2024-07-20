import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatPrice } from "@/utils/price.js";
import { theme } from "../config/theme";

export const OrderItem = ({ id, createdAt, totalPrice }) => {
  return (
    <View style={styles.orderItem}>
      <Text style={styles.textProduct}>ID: {id}</Text>
      <Text style={styles.textDescription}>
        Total: {formatPrice(totalPrice)}
      </Text>
      <Text style={styles.textDescription}>Fecha: {createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    alignItems: "flex-start",
    justifyContent: "center",
    height: 110,
    borderWidth: 2,
    borderColor: theme.colors.primary[400],
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },
  textProduct: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  textDescription: {
    fontSize: 12,
    fontFamily: "Inter",
  },
});
