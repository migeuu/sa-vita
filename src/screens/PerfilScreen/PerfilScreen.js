//importação de pacotes e componentes
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import imageBruno from "../../../assets/images/brunin.jpg";

const PerfilScreen = () => {
  // Tenho que criar um estado que seja booleano e que retorne um texto caso seja true e outro caso seja false
  const imageBrunao = imageBruno;

  const [isFollowing, setIsFollowing] = useState(false);
  const [followText, setFollowText] = useState("Seguir");

  // ISSUE - O estado do componente FOLLOW_TEXT so atualiza quando é clicado pela segunda vez
  const toggleIsFollowing = () => {
    setIsFollowing(!isFollowing);
    if (isFollowing === true) {
      setFollowText("Seguindo");
    } else if (isFollowing === false) {
      setFollowText("Seguir");
    }
  };

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ProfileHeader
        username="Bruno_Ecker"
        imageProfile={imageBrunao}
        followers={1578}
        following={550}
        postNumbers={32}
        isFollowing={followText}
        followOnPress={toggleIsFollowing}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
});

export default PerfilScreen;
