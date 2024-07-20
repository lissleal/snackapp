import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../config/theme";

export const Button = ({ children, onPress }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{children}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary[400],
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
