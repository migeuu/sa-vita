import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilScreen from "../PerfilScreen/PerfilScreen";
import EditProfileScreen from "../EditProfileScreen/EditProfileScreen";

const PerfilStack = createStackNavigator();

const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PerfilStack.Screen name="Tela de Perfil" component={PerfilScreen} />
      <PerfilStack.Screen
        name="Editar informações"
        component={EditProfileScreen}
      />
    </PerfilStack.Navigator>
  );
};

export default PerfilStackScreen;
