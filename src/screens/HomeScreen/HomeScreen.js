import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MensagensScreen from "../MensagensScreen/MensagensScreen";
import PerfilScreen from "../PerfilScreen/PerfilScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import PropostasScreen from "../PropostasScreen/PropostasScreen";
import Icon from "react-native-vector-icons/Feather";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import Post from "../../components/Post/Post";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const { colors } = useTheme();

  return (
    <View>
      <Text style={{ color: colors.text }}>Tela de mensagens 💓</Text>
      <Post title="Post test" username="Miguel Marquiori" />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00c4cc",
        tabBarInactiveTintColor: "#3d3d3d",
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case "Main":
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
      })}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Propostas" component={PropostasScreen} />
      <Tab.Screen name="Mensagens" component={MensagensScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
