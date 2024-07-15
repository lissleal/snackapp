import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTE } from "./routes";
import { MyProfile } from "../screens/myProfile";
import { ImageSelector } from "../screens/imageSelector";
import { LogoutIcon } from "../icons/logoutIcon";

const { Navigator, Screen } = createNativeStackNavigator();

export const MyProfileStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitleStyle: { fontFamily: "Inter" },
        headerShadowVisible: false,
        headerRight: () => <LogoutIcon />,
      }}
    >
      <Screen
        name={ROUTE.MY_PROFILE}
        component={MyProfile}
        options={{ headerTitle: "Perfil" }}
      />
      <Screen
        name={ROUTE.IMAGE_SELECTOR}
        component={ImageSelector}
        options={{ headerTitle: "Seleccionar imagen" }}
      />
    </Navigator>
  );
};
