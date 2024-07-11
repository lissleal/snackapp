import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./navigator";
import { AuthStack } from "./authStack.jsx";
import { useSelector } from "react-redux";

export const MainNavigator = () => {
  const user = useSelector((state) => state.auth.value.user);
  console.log("user", user);

  return (
    <NavigationContainer>
      {user && user.email ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
