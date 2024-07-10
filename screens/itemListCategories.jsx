import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { ProductItem } from "../components/productItem";
import { SearchInput } from "../components/searchInput";
import products from "../data/products.json";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes";

export const ItemListCategories = () => {
  const { params } = useRoute();
  const { navigate, setOptions } = useNavigation();
  const [textToSearch, setTextToSearch] = useState("");
  const [productsFiltered, setProductsFiltered] = useState(products);

  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);

  const handleSearch = (textToSearch) => {
    if (params.category) {
      const productsFiltered = products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(textToSearch.toLowerCase().trim()) &&
          product.category === params.category
      );
      setProductsFiltered(productsFiltered);
      return;
    }
    setTextToSearch(textToSearch);
    const productsFiltered = products.filter((product) =>
      product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
    );
    setProductsFiltered(productsFiltered);
  };

  useEffect(() => {
    if (params.category) {
      const filteredByCategory = products.filter(
        (product) => product.category === params.category
      );
      setProductsFiltered(filteredByCategory);
    } else {
      setProductsFiltered(products);
    }
  }, [products, params.category]);

  useEffect(() => {
    const category = params.category;
    setOptions({ title: category });
  }, [params.category]);

  const navigateToItemDetails = (productId) =>
    navigate(ROUTE.PRODUCTO, { productId });
  return (
    <SafeAreaView style={styles.itemListCategories}>
      <View style={styles.header}>
        <SearchInput
          onChangeText={handleSearch}
          value={textToSearch}
          placeholder="Busca tus Snacks favoritos"
        />
      </View>
      <View style={styles.categories}>
        {productsFiltered.length === 0 ? (
          <Text style={styles.error}>
            No se encontraron productos con el texto "{textToSearch}"
          </Text>
        ) : null}
        {/* <Text style={styles.text}>Categorias Favoritas</Text> */}
        {/* <Categories /> */}
      </View>

      <View style={styles.products}>
        <FlatList
          contentContainerStyle={styles.listProducts}
          data={productsFiltered}
          key={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              {...item}
              onPress={() => navigateToItemDetails(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const createStyles = (width, height) =>
  StyleSheet.create({
    itemListCategories: {
      flex: 1,
      padding: 21,
      width: width,
      height: height,
      gap: 10,
    },
    header: {
      flex: 1,
    },
    categories: {
      flex: 2,
      justifyContent: "center",
    },
    products: {
      flex: 10,
    },

    text: {
      fontSize: 28,
      fontWeight: "bold",
      fontFamily: "Inter",
    },
    listProducts: {
      gap: 10,
    },
    error: {
      color: "red",
      fontSize: 20,
      fontFamily: "Inter",
    },
  });
