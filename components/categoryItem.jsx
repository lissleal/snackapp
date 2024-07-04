import { View, Text, StyleSheet } from "react-native";

export const CategoryItem = ({ nombre }) => {
  return (
    <View style={styles.category}>
      <Text style={styles.text}>{nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#F7F6F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 38,
    paddingHorizontal: 12,
    height: 33,
  },
  text: {
    fontSize: 13,
    color: "#505050",
  },
});
