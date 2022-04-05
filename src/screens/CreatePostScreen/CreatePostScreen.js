import { View } from "react-native";
import React from "react";
import styles from "./styles";
import FormPost from "../../components/FormPost/FormPost";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <FormPost />
    </View>
  );
};

export default CreatePostScreen;
