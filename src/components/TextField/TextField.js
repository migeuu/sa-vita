import React from "react";
import { View, TextInput } from "react-native";

export default function TextField({ error, label, ...inputProps }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...inputProps} />
      {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
    </View>
  );
}
