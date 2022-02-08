import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import PropostasScreen from "../../screens/PropostasScreen/PropostasScreen";
import MensagensScreen from "../../screens/MensagensScreen/MensagensScreen";
import PerfilScreen from "../../screens/PerfilScreen/PerfilScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import { useTheme } from "@react-navigation/native";
import Header from "../Header/Header";

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  const { colors } = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => <Header />,
        headerTintColor: colors.text,
        headerStyle: {
          height: 80,
          backgroundColor: colors.background,
        },
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Propostas"
        component={PropostasScreen}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Mensagens"
        component={MensagensScreen}
      ></Drawer.Screen>
      <Drawer.Screen name="Perfil" component={PerfilScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
