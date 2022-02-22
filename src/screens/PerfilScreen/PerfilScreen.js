//importação de pacotes e componentes
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileBody from "../../components/ProfileBody/ProfileBody";
import imageBruno from "../../../assets/images/brunin.jpg";

const PerfilScreen = () => {
  const imageBrunao = imageBruno;

  const [isFollowing, setIsFollowing] = useState(false);

  // ISSUE - Tenho que criar um estado que seja booleano e que retorne um texto caso seja true e outro caso seja false
  // ISSUE - O estado do componente FOLLOW_TEXT so atualiza quando é clicado pela segunda vez
  // ISSUE FIX - Estado do isFollowing retorna diretamente no componente de texto o estado "SEGUIR"/"SEGUINDO".
  const toggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ProfileHeader
        username="Bruno_Ecker"
        imageProfile={imageBrunao}
        followers={1591}
        following={561}
        postNumbers={32}
        isFollowing={isFollowing}
        followOnPress={toggleIsFollowing}
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
