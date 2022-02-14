import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const ShareButton = () => {
  const { colors } = useTheme();
  return (
    <Pressable style={{ width: 30, height: 30 }}>
      <MaterialCommunityIcons
        name="share-variant"
        size={30}
        color={colors.text}
      />
    </Pressable>
  );
};

export default ShareButton;
