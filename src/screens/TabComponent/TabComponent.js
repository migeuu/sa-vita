import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../HomeScreen/Home";
import ChatsScreen from "../MensagensScreen/ChatsScreen";
import PerfilScreen from "../PerfilScreen/PerfilScreen";
import SettingsScreen from "../SettingsScreen/SettingsScreen";
import PropostasScreen from "../PropostasScreen/PropostasScreen";
import Icon from "react-native-vector-icons/Feather";
// import ChatRoomScreeen from "../MensagensScreen/ChatRoomScreen";
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// function ChatsScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="ChatRoom" component={ChatRoomScreeen}  
//       options={({ route })  => ({
//           title: route.params.name
//         })} />
//    </Stack.Navigator>
//   )
// }

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
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Propostas" component={PropostasScreen} />
      <Tab.Screen name="Mensagens" component={ChatsScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabComponent;

