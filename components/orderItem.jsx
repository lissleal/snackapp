import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { formatPrice } from "@/utils/price.js";
import { theme } from "../config/theme";

export const OrderItem = ({ id, userId, createdAt, items, totalPrice }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.id}>Order ID: {id}</Text>
      <Text style={styles.total}>Total: {formatPrice(totalPrice)}</Text>
      <Text style={styles.date}>Date: {formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: theme.colors.white,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "black",
  },
  category: {
    fontSize: 14,
    color: "black",
  },
  quantity: {
    fontSize: 14,
    color: "black",
  },
});
