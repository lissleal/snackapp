import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
// import theme from "../config/theme";

export const ProductItem = ({ name, price, description, onPress }) => {
  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);
  return (
    <Pressable style={styles.productItem} onPress={onPress}>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textDescription}>{description}</Text>
        <Text style={styles.textPrice}>{price}</Text>
      </View>
    </Pressable>
  );
};

const createStyles = (width) =>
  StyleSheet.create({
    productItem: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      height: 120,
      borderWidth: 1,
      borderColor: "#D3B398",
      borderRadius: 20,
      padding: 10,
    },
    textContainer: {
      flex: 2,
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 10,
    },
    textProduct: {
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "Inter",
    },
    textDescription: {
      fontSize: 12,
      fontFamily: "Inter",
    },
    imagen: {
      height: 110,
      width: 110,
      flex: 1,
    },
  });
