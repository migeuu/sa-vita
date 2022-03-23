import { View } from "react-native";
import React from "react";
import styles from "./styles";
import { MyReactNativeForm } from "../../components/FormPost/FormPost";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <MyReactNativeForm />
    </View>
  );
};

export default CreatePostScreen;
