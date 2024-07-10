import { Pressable, Text, StyleSheet } from "react-native";

export const CategoryItem = ({ name, onPress }) => {
  return (
    <Pressable style={styles.category} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  category: {
    backgroundColor: "#F7F6F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 38,
    paddingHorizontal: 10,
    height: 33,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: "Inter",
    color: "#505050",
  },
});
