//importação de pacotes e componentes
import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
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
        followers={1578}
        following={550}
        postNumbers={32}
        isFollowing={isFollowing}
        followOnPress={toggleIsFollowing}
        title="Cuidador | Programador | Surfista Amador | DesenvolvedorJS"
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
