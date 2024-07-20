import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { theme } from "../config/theme";

export const ButtonSlide = ({ onPress, icon: IconComponent, children }) => {
  return (
    <Pressable style={styles.botonDeslizante} onPress={onPress}>
      <Text style={styles.texto}>{children}</Text>
      {IconComponent && (
        <View style={styles.iconContainer}>
          <IconComponent />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botonDeslizante: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 60,
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary[300],
  },
  iconContainer: {
    width: 80,
    height: 45,
    backgroundColor: theme.colors.primary[300],
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    fontFamily: "Inter",
  },
});

export default ButtonSlide;
