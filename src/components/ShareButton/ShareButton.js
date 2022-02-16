import React from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const ShareButton = (props) => {
  const { colors } = useTheme();
  return (
    <Pressable {...props} style={{ width: 30, height: 30 }}>
      <MaterialCommunityIcons
        name="share-variant"
        size={30}
        color={colors.text}
      />
    </Pressable>
  );
};

export default ShareButton;
