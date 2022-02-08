import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MensagensScreen from "../MensagensScreen/MensagensScreen";
import PerfilScreen from "../PerfilScreen/PerfilScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import PropostasScreen from "../PropostasScreen/PropostasScreen";
import Icon from "react-native-vector-icons/Feather";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreenComponent = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>ola tudo bem</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Propostas":
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
        activeTintColor: "#00c4cc",
        inactiveTintColor: "#777",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreenComponent} />
      <Tab.Screen name="Propostas" component={PropostasScreen} />
      <Tab.Screen name="Mensagens" component={MensagensScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
