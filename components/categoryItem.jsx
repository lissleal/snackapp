import { Pressable, Text, StyleSheet } from "react-native";
import { theme } from "../config/theme";

export const CategoryItem = ({ name, onPress }) => {
  return (
    <Pressable style={styles.category} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: theme.colors.primary[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 40,
    width: 300,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: "Inter",
    color: theme.colors.white,
  },
});
