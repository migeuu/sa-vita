import { View, TextInput, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { MyReactNativeForm } from "../../components/FormPost/FormPost";

const CreatePostScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <MyReactNativeForm />
    </ScrollView>
  );
};

export default CreatePostScreen;
