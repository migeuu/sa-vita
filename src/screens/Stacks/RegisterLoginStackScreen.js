import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../Register/Register";
import Login from "../Login/Login";
import TabComponent from "../../components/TabComponent/TabComponent";

const RegisterLoginStack = createStackNavigator();

const RegisterLoginStackScreen = () => {
  return (
    <RegisterLoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <RegisterLoginStack.Screen name="Home" component={TabComponent} />
      <RegisterLoginStack.Screen name="Login" component={Login} />
      <RegisterLoginStack.Screen name="Registro" component={Register} />
    </RegisterLoginStack.Navigator>
  );
};

export default RegisterLoginStackScreen;
