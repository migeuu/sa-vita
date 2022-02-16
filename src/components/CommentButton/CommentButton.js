import React from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const CommentButton = () => {
  const { colors } = useTheme();

  return (
    <Pressable style={{ width: 30, height: 30, marginLeft: 8 }}>
      <MaterialCommunityIcons
        name="message-outline"
        size={30}
        color={colors.text}
      />
    </Pressable>
  );
};

export default CommentButton;
