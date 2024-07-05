import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, SafeAreaView, FlatList } from "react-native";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { ProductItem } from "../components/productItem";
import { SearchInput } from "../components/searchInput";

import products from "../data/products.json";

export const ItemListCategories = () => {
  const [textToSearch, setTextToSearch] = useState("");
  const [productsFiltered, setProductsFiltered] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
    );
    setProductsFiltered(filtered);
  }, [textToSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header label="Volver" />
        <SearchInput
          onChangeText={setTextToSearch}
          value={textToSearch}
          placeholder="   Busca tu Snack favorito"
        />
      </View>

      <Text style={styles.text}>Categoría Actual</Text>
      {/* <Categories /> */}
      <FlatList
        data={productsFiltered}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <ProductItem {...item}></ProductItem>}
        key={(item) => item.id}
      ></FlatList>

      {productsFiltered.length === 0 ? (
        <Text style={styles.error}>
          {" "}
          No se encontraron productos con el texto "{textToSearch}"
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    gap: 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    fontSize: 20,
  },
});
