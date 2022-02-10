import React from "react";
import { StatusBar } from "react-native";
import { Login } from "./src/screens/Login";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Login />
    </>
  );
}
