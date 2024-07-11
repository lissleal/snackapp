import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { ProductItem } from "../components/productItem";
import { SearchInput } from "../components/searchInput";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

export const ItemListCategories = () => {
  const { navigate, setOptions } = useNavigation();
  const [textToSearch, setTextToSearch] = useState("");
  const category = useSelector((state) => state.shop.categorySelected);
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category);

  const [productsFiltered, setProductsFiltered] = useState(products);

  const navigateToItemDetails = (productId) =>
    navigate(ROUTE.PRODUCTO, { productId });

  const handleSearch = (textToSearch) => {
    setTextToSearch(textToSearch);
    const filtered = products?.filter((product) =>
      product.name.toLowerCase().includes(textToSearch.toLowerCase().trim())
    );
    setProductsFiltered(filtered);
  };

  useEffect(() => {
    if (products) {
      setProductsFiltered(products);
    }
  }, [products]);

  useFocusEffect(() => {
    setOptions({ title: category });
  });

  //Estilos
  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);

  if (isLoading) {
    return (
      <View style={styles.itemListCategories}>
        <ActivityIndicator size="large" color="orange" />
        <Text>Cargando productos...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.itemListCategories}>
        <Text>Error al cargar productos: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.itemListCategories}>
      <View style={styles.header}>
        <SearchInput
          onChangeText={handleSearch}
          value={textToSearch}
          placeholder="Busca tus Snacks favoritos"
        />
      </View>

      <View style={styles.products}>
        <FlatList
          contentContainerStyle={styles.listProducts}
          data={productsFiltered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem
              {...item}
              onPress={() => navigateToItemDetails(item.id)}
            />
          )}
        />
      </View>

      <View style={styles.categories}>
        {productsFiltered && productsFiltered.length === 0 ? (
          <Text style={styles.error}>
            No se encontraron productos con el texto "{textToSearch}"
          </Text>
        ) : null}
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
