import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { OrderItem } from "../components/orderItem";
import { useSelector } from "react-redux";
import { useGetOrdersByUserQuery } from "../services/shopService";
import { theme } from "../config/theme";

export const Orders = () => {
  const user = useSelector((state) => state.auth.value.user);

  const {
    data: orders,
    error,
    isLoading,
  } = useGetOrdersByUserQuery(user.localId);

  if (isLoading) {
    return <Text>Cargando ordenes...</Text>;
  }
  if (error) {
    console.error("Error al cargar órdenes:", error);
    return <Text>Error al cargar órdenes</Text>;
  }

  const ordersArray = orders || [];

  return (
    <SafeAreaView style={styles.orders}>
      <FlatList
        contentContainerStyle={styles.orderList}
        data={ordersArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrderItem
            createdAt={item.date}
            totalPrice={item.total}
            id={item.id}
          />
        )}
        ListEmptyComponent={<Text>No hay ordenes</Text>}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  orders: {
    flex: 1,
    padding: 16,
    gap: 10,
    justifyContent: "space around",
    backgroundColor: theme.colors.white,
  },
  orderList: {
    gap: 10,
  },
});
