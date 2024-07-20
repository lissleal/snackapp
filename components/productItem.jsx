import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { theme } from "../config/theme.js";
import { formatPrice } from "../utils/price.js";

export const ProductItem = ({ name, price, description, onPress }) => {
  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);
  return (
    <Pressable style={styles.productItem} onPress={onPress}>
      <Image
        style={styles.imagen}
        source={require("../assets/images/papasybebida.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textDescription}>{description}</Text>
        <Text>Precio: {formatPrice(price)}</Text>
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
      height: 110,
      borderWidth: 2,
      borderColor: theme.colors.primary[400],
      borderRadius: 20,
      paddingHorizontal: 10,
      gap: 10,
    },
    textContainer: {
      flex: 2,
      alignItems: "flex-start",
      justifyContent: "center",
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
      height: 100,
      width: 100,
    },
  });
