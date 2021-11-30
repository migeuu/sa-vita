import React from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

export default function App() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
