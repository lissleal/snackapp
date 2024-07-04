import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Arrow } from "../icons/arrow";
import { Card } from "../components/card";

export const ItemListCategories = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header label="Todas las categorías" />
        <Text style={styles.text}>Categoría Actual</Text>
        {/* <Categories /> */}
        <Card />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space around",
    padding: 24,
    gap: 20,
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
