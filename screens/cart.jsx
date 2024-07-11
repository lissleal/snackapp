import React, { useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow } from "../icons/arrow.jsx";
import { SafeAreaView } from "react-native";
import { CartItem } from "../components/cartItem";
import { formatPrice } from "../utils/price";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cart/cartSlice.js";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  const onPress = () => {
    console.log("Ir a pagar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        contentContainerStyle={styles.cartList}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={() => handleDelete(item)} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
      />

      <View style={styles.totalContainer}>
        <Text>Total a Pagar</Text>
        <Text>{formatPrice(total)}</Text>
      </View>
      <ButtonSlide onPress={onPress} icon={Arrow}>
        Ir a Pagar
      </ButtonSlide>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 10,
    justifyContent: "space around",
    backgroundColor: "#D3B398",
  },
  totalContainer: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 20,
    padding: 15,
  },
  cartList: {
    gap: 10,
  },
});
