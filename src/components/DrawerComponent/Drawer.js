import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import Header from "../Header/Header";
import CustomDrawer from "../CustomDrawer/CustomDrawer";

// TELAS
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import MensagensScreen from "../../screens/MensagensScreen/MensagensScreen";
import PerfilScreen from "../../screens/PerfilScreen/PerfilScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import PoliticaPrivacidade from "../../screens/PoliticaPrivacidade/PoliticaPrivacidadeScreen";

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
        name="Mensagens"
        component={MensagensScreen}
        options={{
          DrawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          DrawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          DrawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Política e Privacidade"
        component={PoliticaPrivacidade}
        options={{
          DrawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerComponent;
