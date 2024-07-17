import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { OrderItem } from "../components/orderItem";
import { useSelector } from "react-redux";
import { useGetOrdersByUserQuery } from "../services/shopService";

export const Orders = () => {
  const user = useSelector((state) => state.auth.value.user);
  console.log("Current user:", user.localId);

  const {
    data: orders,
    error,
    isLoading,
  } = useGetOrdersByUserQuery(user.localId);
  console.log("Orders data:", orders);
  console.log(orders.items);

  if (isLoading) {
    return <Text>Cargando ordenes...</Text>;
  }
  if (error) {
    console.error("Error al cargar órdenes:", error);
    return <Text>Error al cargar órdenes</Text>;
  }

  const ordersArray = orders ? Object.values(orders) : [];
  console.log("Orders array:", ordersArray);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={ordersArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <OrderItem createdAt={item.date} totalPrice={item.total} />
        )}
        ListEmptyComponent={<Text>No hay ordenes</Text>}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
  },
  list: {
    gap: 32,
    marginTop: 8,
    marginHorizontal: 8,
  },
});
