import { View, Text } from "react-native";
import React from "react";
import { TouchableNativeFeedback } from "react-native";

const DismissKeyboard = ({ children }) => {
  return <TouchableNativeFeedback>{children}</TouchableNativeFeedback>;
};

export default DismissKeyboard;
