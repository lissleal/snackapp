import React, { useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow } from "../icons/arrow.jsx";
import { SafeAreaView } from "react-native";
import cartData from "../data/cart.json";
import { CartItem } from "../components/cartItem";
import { formatPrice } from "../utils/price";

export const Cart = () => {
  const [cart, setCart] = useState(cartData);
  const totalPrice = cart.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const onPress = () => {
    console.log("Ir a pagar");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cart}
        contentContainerStyle={styles.cartList}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
      />

      <View style={styles.totalContainer}>
        <Text>Total a Pagar</Text>
        <Text>{formatPrice(totalPrice)}</Text>
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
