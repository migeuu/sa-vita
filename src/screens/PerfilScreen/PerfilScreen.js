//importação de pacotes e componentes
import React, { useState, useContext } from "react";
import { StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import { ContextApp } from "../../context/Context";

const PerfilScreen = () => {
  const { user, setUser } = useContext(ContextApp);

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ProfileHeader
        username={user.username}
        followers={4}
        following={2}
        postNumbers={0}
        title={user.fullName}
        description={user.description}
      />
      <ProfileBody />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
});

export default PerfilScreen;
