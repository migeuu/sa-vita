import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../HomeScreen/Home";
import CreatePostScreen from "../CreatePostScreen/CreatePostScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name == "HomeStack" ? false : true,
      })}
    >
      <HomeStack.Screen name="HomeStack" component={Home} />
      <HomeStack.Screen name="Nova publicação" component={CreatePostScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
