//importação de pacotes e componentes
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import imageBruno from "../../../assets/images/brunin.jpg";

const PerfilScreen = () => {
  const imageBrunao = imageBruno;

  return (
    <SafeAreaView style={styles.profileContainer}>
      <ProfileHeader username="Bruno Ecker" imageProfile={imageBrunao} followers={1578} following={550} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#c71",
  },
});

export default PerfilScreen;
