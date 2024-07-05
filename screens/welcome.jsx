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
    <View style={styles.safeArea}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D3B398",
  },
  container: {
    flex: 4,
    alignItems: "center",
    margin: 10,

    justifyContent: "space around",
    padding: 24,
    gap: 20,
  },

  title: {
    fontSize: 48,
  },
  titleContainer: {
    flex: 1,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBlockColor: "black",
    alignItems: "center",
    justifyContent: "center",
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
    width: 300,
    height: 300,
  },
});
