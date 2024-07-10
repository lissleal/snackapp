import { StyleSheet, View, Text, TextInput } from "react-native";
import { Arrow } from "../icons/arrow";
import React from "react";

export const Header = ({ icon: IconComponent, label }) => {
  return (
    <View style={styles.headerBack}>
      <Arrow></Arrow>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontFamily: "Inter",
  },
  headerBack: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});
