import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalConfirmacion } from "../components/modalConfirmacion.jsx";
import { ButtonSlide } from "../components/buttonSlide.jsx";
import { Arrow2 } from "../icons/arrow2.jsx";

export const Welcome = () => {
  const [button, setButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    console.log("Botón presionado");
    setModalVisible(true);
    setButton(true);
  };

  const onHandleModal = () => {
    setModalVisible((modalVisible) => !modalVisible);
    console.log("Modal cerrado");
  };

  return (
    <SafeAreaView>
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
        <ModalConfirmacion
          onHandleModal={onHandleModal}
          modalVisible={modalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    justifyContent: "space around",
    padding: 24,
    backgroundColor: "#D3B398",
    gap: 20,
  },

  title: {
    fontSize: 48,
  },
  titleContainer: {
    borderRadius: 50, //arreglar
    borderBlockColor: "black",
    padding: 24,
    backgroundColor: "white",
    gap: 20,
  },
  subtitle: {
    padding: 15,
    fontSize: 20,
    color: "#38434D",
  },
  imagen: {
    width: 320,
    height: 320,
  },
});
