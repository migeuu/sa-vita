import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerComponent from "./src/components/DrawerComponent/Drawer"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <DrawerComponent />
    </NavigationContainer>
  );
}

export default App;
