import * as React from "react";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import DrawerComponent from "./src/components/DrawerComponent/Drawer";

function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <DrawerComponent />
    </NavigationContainer>
  );
}

export default App;
