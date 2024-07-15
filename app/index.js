
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { MainNavigator } from "../navigation/mainNavigator";
import { init } from '../db'

SplashScreen.preventAutoHideAsync();

init()
  .then(() => console.log('Database initialized'))
  .catch(err => console.error('Database initialization failed', err))

export default function Index() {
  const [loaded, error] = useFonts({
    Inter: require("../assets/fonts/inter.ttf"),
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
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
