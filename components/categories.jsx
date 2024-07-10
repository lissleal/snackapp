import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import data from "../data/categories.json";
import { CategoryItem } from "./categoryItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes";

export const Categories = () => {
  const { navigate } = useNavigation();
  // const handlePress = (category) => {
  //   navigate(ROUTE.PRODUCTOS, { category });
  // };

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      horizontal
      renderItem={({ item }) => (
        <CategoryItem
          name={item}
          onPress={() =>
            navigate(ROUTE.PRODUCTOS, {
              category: item,
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
