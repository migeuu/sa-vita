import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "../../screens/Stacks/HomeStackScreen";
import MensagensScreen from "../../screens/MensagensScreen/MensagensScreen";
import PerfilScreen from "../../screens/PerfilScreen/PerfilScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00c4cc",
        tabBarInactiveTintColor: "#3d3d3d",
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Search":
              iconName = "search";
              break;
            case "Mensagens":
              iconName = "message-square";
              break;
            case "Perfil":
              iconName = "user";
              break;
            case "Configurações":
              iconName = "settings";
              break;
            default:
              iconName = "circle";
              break;
          }

          return <Icon name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Mensagens" component={MensagensScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabComponent;
