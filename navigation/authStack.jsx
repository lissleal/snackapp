import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes";
import { Login } from "../screens/login";
import { SignUp } from "../screens/signUp";

const { Navigator: StackNavigator, Screen: StackScreen } =
  createNativeStackNavigator();

export const AuthStack = () => (
  <StackNavigator
    // initialRouteName={ROUTE.LOGIN}
    screenOptions={{
      //   headerBackVisible: false,
      //   headerShadowVisible: false,
      headerTitleStyle: { fontFamily: "Inter" },
    }}
  >
    <StackScreen
      name={ROUTE.LOGIN}
      component={Login}
      options={{
        headerTitle: "Snackeando",
      }}
    />
    <StackScreen
      name={ROUTE.SING_UP}
      component={SignUp}
      options={{
        headerTitle: "Crear cuenta",
      }}
    />
  </StackNavigator>
);
