import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow } from "../icons/arrow.jsx";
import { SafeAreaView } from "react-native";
import { CartItem } from "../components/cartItem";
import { formatPrice } from "../utils/price";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../features/cart/cartSlice.js";
import { usePostOrderMutation } from "../services/shopService.js";
import { theme } from "../config/theme.js";
import { useGetOrdersByUserQuery } from "../services/shopService.js";
import { useNavigation } from "@react-navigation/native";

export const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.value.items);
  const total = useSelector((state) => state.cart.value.total);
  const user = useSelector((state) => state.auth.value.user);
  const userMail = user.email;
  const [triggerPost, { isSuccess, isError, error }] =
    usePostOrderMutation(userMail);
  const { data: orders, refetch } = useGetOrdersByUserQuery(user.localId);
  const cartIsEmpty = items.length === 0;

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  const confirmOrder = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();
    const todayFormatted = today.toLocaleDateString("es-CL", options);
    triggerPost({ items, total, user, date: todayFormatted });
  };

  useEffect(() => {
    if (isSuccess) {
      Alert.alert("Éxito", "Orden creada exitosamente");
      dispatch(clearCart());
      refetch();
    }
    if (isError) {
      Alert.alert(
        "Error",
        error?.data?.message || "Hubo un error al crear la orden"
      );
    }
  }, [isSuccess, isError, refetch]);

  return (
    <SafeAreaView style={styles.cart}>
      <FlatList
        data={items}
        contentContainerStyle={styles.cartList}
        renderItem={({ item }) => (
          <CartItem {...item} onDelete={() => handleDelete(item)} />
        )}
        ListEmptyComponent={<Text>No hay productos en el carrito</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.textTotal}>
          Total a Pagar: {formatPrice(total)}
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        {!cartIsEmpty ? (
          <ButtonSlide onPress={confirmOrder} icon={Arrow}>
            Ir a Pagar
          </ButtonSlide>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    padding: 16,
    gap: 10,
    justifyContent: "space around",
    backgroundColor: theme.colors.white,
  },
  totalContainer: {
    backgroundColor: theme.colors.primary[400],
    borderRadius: 10,
    padding: 15,
  },
  textTotal: {
    color: theme.colors.white,
    fontSize: 20,
    textAlign: "center",
  },
  cartList: {
    gap: 10,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
