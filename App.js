import * as React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import TabComponent from "./src/components/TabComponent/TabComponent";

function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <TabComponent />
    </NavigationContainer>
  );
}

export default App;
