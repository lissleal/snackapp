import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./navigator";
import { AuthStack } from "./authStack.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/shopService";
import { setUserImgProfile, setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";

export const MainNavigator = () => {
  const { localId } = useSelector((state) => state.auth.value.user);
  const { data: profileImage } = useGetProfileImageQuery(localId);

  const dispatch = useDispatch();

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession();
      if (session) dispatch(setUser(session));
    };
    getSession();
  }, []);

  useEffect(() => {
    if (profileImage) {
      dispatch(setUserImgProfile(profileImage.image));
    }
  }, [profileImage]);

  return (
    <NavigationContainer>
      {localId ? <Navigator /> : <AuthStack />}
    </NavigationContainer>
  );
};
