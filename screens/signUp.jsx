import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigation/routes";
import { useState } from "react";
import { useSignUpMutation } from "../services/authService";
import { signupSchema } from "../validations/signUpSchema";

export const SignUp = () => {
  const { navigate } = useNavigation();
  const [triggerSignUp, result] = useSignUpMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signupSchema.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );

      setErrorEmail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      const payload = await triggerSignUp({ email, password }).unwrap();
      navigate(ROUTE.LOGIN);
    } catch (error) {
      if (error.name === "ValidationError") {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrorEmail(validationErrors.email || "");
        setErrorPassword(validationErrors.password || "");
        setErrorConfirmPassword(validationErrors.confirmPassword || "");
      } else {
        console.error("Error en la solicitud de registro:", error);
      }
    }
  };

  const goToLogin = () => navigate(ROUTE.LOGIN);

  return (
    <View style={styles.signUp}>
      <View style={styles.section}>
        <Input
          error={errorEmail}
          label="Correo electronico"
          placeholder="tunombre@snackeando.com"
          onChangeText={setEmail}
          value={email}
        />
        <Input
          error={errorPassword}
          label="Contraseña"
          placeholder="*******"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
        <Input
          error={errorConfirmPassword}
          label="Confirmar csontraseña"
          placeholder="*******"
          secureTextEntry
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Button onPress={handleSignUp}>Registrarse</Button>
      </View>
      <View style={styles.section}>
        <Text>Ya tienes cuenta?</Text>
        <Button onPress={goToLogin}>Ingresar</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    minHeight: "100%",
    width: "100%",
    backgroundColor: "white",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  section: {
    width: "100%",
    gap: 16,
  },
});
