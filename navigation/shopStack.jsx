import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes";
import { Home } from "../screens/home";
import { ItemDetail } from "../screens/itemDetail";
import { ItemListCategories } from "../screens/itemListCategories";
import { Welcome } from "../screens/welcome";

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
      options={{
        headerTitle: "Bienvenido",
      }}
    />
    <StackScreen
      name={ROUTE.TIENDA}
      component={Home}
      options={{ headerTitle: "Tienda" }}
    />
    <StackScreen name={ROUTE.PRODUCTOS} component={ItemListCategories} />
    <StackScreen name={ROUTE.PRODUCTO} component={ItemDetail} />
  </StackNavigator>
);
