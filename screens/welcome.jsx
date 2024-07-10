import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow2 } from "../icons/arrow2.jsx";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes.js";

export const Welcome = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(ROUTE.INICIO);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Snackeando</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          Bienvenido a tu aplicación de Snacks Saludables
        </Text>

        <Image
          style={styles.imagen}
          source={{
            uri: "https://clipart-library.com/8300/2368/snacks-clipart-md.png",
          }}
        />

        <ButtonSlide onPress={onPress} icon={Arrow2}>
          Ingresar
        </ButtonSlide>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D3B398",
  },
  titleContainer: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 14,
    backgroundColor: "white",
  },
  container: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 24,
    gap: 30,
  },
  title: {
    fontSize: 40,
    fontFamily: "Inter",
    color: "#D3B398",
    fontStyle: "italic",
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
    fontFamily: "Inter",
  },
  imagen: {
    minHeight: 90,
    minWidth: 90,
    height: "50%",
    width: "70%",
  },
});
