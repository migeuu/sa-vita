import * as React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import TabComponent from "./src/screens/TabComponent/TabComponent";

function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <TabComponent></TabComponent>
    </NavigationContainer>
  );
}

export default App;
