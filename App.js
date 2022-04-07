import React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ContextProvider from "./src/context/Context";
import LoggedValidation from "./src/screens/LoggedValidation";

function App() {
  const scheme = useColorScheme();

  return (
    <ContextProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="light" />
        <SafeAreaProvider>
          <StatusBar style="light" />
          <LoggedValidation />
        </SafeAreaProvider>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
