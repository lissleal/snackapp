import { Cart } from "../screens/cart.jsx";
import { useFonts } from "expo-font";
import { SafeAreaView, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    inter: require("../assets/fonts/inter.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView>
      <Cart />
    </SafeAreaView>
  );
}
