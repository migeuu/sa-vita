import React from "react";
import { View, TextInput } from "react-native";
import TextDefault from "../TextDefault/TextDefault";

export default function TextField({ label, ...inputProps }) {
  return (
    <View style={styles.container}>
      <TextDefault style={styles.label}>{label}</TextDefault>
      <TextInput style={styles.input} {...inputProps} />
    </View>
  );
}
