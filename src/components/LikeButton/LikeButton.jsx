import React from "react";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const LikeButton = () => {
  const liked = useSharedValue(0);

  const outlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const fillStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: liked.value,
        },
      ],
      opacity: liked.value,
    };
  });

  const { colors } = useTheme();

  return (
    <Pressable
      style={{ width: 30, height: 30 }}
      onPress={() => (liked.value = withSpring(liked.value ? 0 : 1))}
    >
      <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
        <MaterialCommunityIcons
          name={"heart-outline"}
          size={30}
          color={colors.text}
        />
      </Animated.View>

      <Animated.View style={fillStyle}>
        <MaterialCommunityIcons name={"heart"} size={32} color={"#00c4cc"} />
      </Animated.View>
    </Pressable>
  );
};

export default LikeButton;
