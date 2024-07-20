import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  SafeAreaView,
  Alert,
} from "react-native";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Bag } from "../icons/bag.jsx";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice.js";
import { formatPrice } from "@/utils/price.js";
import { theme } from "../config/theme.js";
import products from "../data/products.json";

export const ItemDetail = () => {
  const { params } = useRoute();
  const { setOptions, goBack } = useNavigation();
  const dispatch = useDispatch();
  const item = products.find((product) => product.id === params.productId);
  const { category, description, name, price } = item;

  const handleAddToCart = () => {
    dispatch(addItem({ ...item }));
    Alert.alert("Producto añadido", `${name} ha sido añadido al carrito`, [
      { text: "OK", onPress: () => goBack() },
    ]);
  };

  useEffect(() => {
    setOptions({ title: name });
  }, [params.name]);

  //Estilos
  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imagen}
        source={require("../assets/images/papasybebida.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textDescription}>Categoría: {category}</Text>
        <Text style={styles.textPrice}>Precio: {formatPrice(price)}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <ButtonSlide onPress={handleAddToCart} icon={Bag}>
        Añadir al carrito
      </ButtonSlide>
    </SafeAreaView>
  );
};

const createStyles = (width, heigth) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: theme.colors.white,
    },

    imagen: {
      height: heigth * 0.3,
      width: width * 0.7,
    },
    textContainer: {
      backgroundColor: theme.colors.primary[300],
      gap: 10,
      padding: 20,
      borderRadius: 20,
    },
    textProduct: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Inter",
      color: theme.colors.gray[800],
    },
    textDescription: {
      fontSize: 13,
      fontFamily: "Inter",
      color: theme.colors.primary[800],
    },
    textPrice: {
      fontSize: 13,
      fontFamily: "Inter",
      color: theme.colors.primary[800],
    },
  });
