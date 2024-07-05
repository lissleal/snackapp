import { StyleSheet, View, Text, TextInput } from "react-native";
import { Search } from "../icons/search";

export const SearchInput = (props) => {
  return (
    <View style={styles.headerSearch}>
      <TextInput {...props} />

      <Search></Search>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSearch: {
    flexDirection: "row",
    gap: 20,
    padding: 5,
    alignItems: "center",
    borderBlockColor: "#D3B398",
    borderWidth: 2,
    borderRadius: 50,
  },
});
