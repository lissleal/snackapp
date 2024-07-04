import { StyleSheet, View, Text } from "react-native";
import { Arrow } from "../icons/arrow";
import { Search } from "../icons/search";

export const Header = ({ icon: IconComponent, label }) => {
  return (
    <View style={styles.header}>
      <Arrow></Arrow>
      <Text style={styles.label}>{label}</Text>
      <Search></Search>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  label: {
    fontSize: 15,
  },
});
