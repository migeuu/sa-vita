import React from "react";
import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import PropostasScreen from "../../screens/PropostasScreen/PropostasScreen";
import MensagensScreen from "../../screens/MensagensScreen/MensagensScreen";
import PerfilScreen from "../../screens/PerfilScreen/PerfilScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Propostas" component={PropostasScreen} />
      <Tab.Screen name="Mensagens" component={MensagensScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomComponent;
