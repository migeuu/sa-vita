import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/Login/Login";
import DrawerComponent from "./src/components/DrawerComponent/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerComponent />
    </NavigationContainer>
  );
}
