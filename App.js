import * as React from "react";
import { useColorScheme, View, Text, Image, StyleSheet } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import TabComponent from "./src/components/TabComponent/TabComponent";
import Login from "./src/screens/Login/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

function App() {
  const scheme = useColorScheme();
  const userLogged = false;

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="light" />
      <SafeAreaProvider>
        <StatusBar style="light" />
        {userLogged ? <TabComponent /> : <Login />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
