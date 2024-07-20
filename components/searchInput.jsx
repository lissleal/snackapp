import { StyleSheet, View, Text, TextInput } from "react-native";
import { Search } from "../icons/search";
import { theme } from "../config/theme";

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
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderBlockColor: theme.colors.primary[400],
    borderWidth: 2,
    borderRadius: 50,
  },
});
