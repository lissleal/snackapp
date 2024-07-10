import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { AllProducts } from "../screens/allProducts";
import { Home } from "../screens/home";
import { ItemDetail } from "../screens/itemDetail";
import { Welcome } from "../screens/welcome";
import { ROUTE } from "./routes";
import { ItemListCategories } from "../screens/itemListCategories";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

export const ShopStack = () => (
  <StackNavigator
    screenOptions={{
      headerTitleStyle: { fontFamily: "Inter" },
      headerShadowVisible: false,
    }}
  >
    <StackScreen
      name={ROUTE.BIENVENIDOS}
      component={Welcome}
      options={{ headerShown: false }}
    />
    <StackScreen
      name={ROUTE.INICIO}
      component={Home}
      options={{ headerTitle: "Inicio" }}
    />
    <StackScreen name={ROUTE.PRODUCTOS} component={ItemListCategories} />
    <StackScreen name={ROUTE.PRODUCTO} component={ItemDetail} />
  </StackNavigator>
);
