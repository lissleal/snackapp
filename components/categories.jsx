import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import { CategoryItem } from "./categoryItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice.js";
import { useGetCategoriesQuery } from "../services/shopService.js";

export const Categories = () => {
  const { navigate } = useNavigation();
  const { data: categories, isLoading, error } = useGetCategoriesQuery();
  const dispatch = useDispatch();

  const handlePress = (category) => {
    dispatch(setCategorySelected(category));
    navigate(ROUTE.PRODUCTOS, { category });
  };

  return (
    <View style={styles.categories}>
      {isLoading ? (
        <View style={styles.categoriesLoading}>
          <ActivityIndicator size="small" color="orange" />
          <Text>Cargando categorias...</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.list}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CategoryItem name={item} onPress={() => handlePress(item)} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
