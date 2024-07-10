import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Bag } from "../icons/bag.jsx";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes.js";

import products from "../data/products.json";

export const ItemDetail = () => {
  const { width, height } = useWindowDimensions();
  const styles = createStyles(width, height);
  const { params } = useRoute();

  const { navigate, setOptions } = useNavigation();

  const item = products.find((product) => product.id === params.productId);
  const { category, description, name, price } = item;

  const handleAddToCart = () => {
    console.log("Añadido al carrito");
  };

  useEffect(() => {
    setOptions({ title: name });
  }, [params.name]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagen}
        source={{
          uri: "https://snackclub.cl/wp-content/uploads/2024/02/ERES-LO-QUE-COMES.-NO-SEAS-RAPIDO-FACIL-O-ARTIFICIAL-1500-x-1500-px-1500-x-1500-px-97.png",
        }}
      ></Image>
      <View style={styles.textContainer}>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textDescription}>{category}</Text>
        <Text style={styles.textPrice}>{price}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
      <ButtonSlide onPress={handleAddToCart} icon={Bag}>
        Añadir al carrito
      </ButtonSlide>
    </View>
  );
};

const createStyles = (width, heigth) =>
  StyleSheet.create({
    container: {
      width: width,
      height: heigth,
      padding: 20,
      gap: 10,
      alignItems: "center",
    },

    imagen: {
      height: heigth * 0.4,
      width: width * 0.7,
    },
    textContainer: {
      backgroundColor: "#D3B398",
      gap: 5,
      padding: 20,
      borderRadius: 40,
    },
    textProduct: {
      fontSize: 28,
      fontWeight: "bold",
      fontFamily: "Inter",
    },
    textDescription: {
      fontSize: 14,
      fontFamily: "Inter",
    },
    textPrice: {
      fontSize: 24,
      fontFamily: "Inter",
    },
  });
