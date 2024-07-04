import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import data from "../data/categories.json";
import { CategoryItem } from "./categoryItem.jsx";

export const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <CategoryItem nombre={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: "center",
    gap: 8,
  },
});
