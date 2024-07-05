import { ItemListCategories } from "../screens/itemListCategories.jsx";
import { useFonts } from "expo-font";
import { SafeAreaView, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

// SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [screen, setScreen] = useState({ path: "welcome", params: null });
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
      <ItemListCategories />
    </SafeAreaView>
  );
}
