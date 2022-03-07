import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Appearance,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ModalCustom from "../Modal/Modal";
import { useTheme } from "@react-navigation/native";

const colorScheme = Appearance.getColorScheme();

const ModalContentProfile = () => {
  return (
    <View style={styles.modalContent}>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
      <Text>MODAL DE PERFIL!</Text>
    </View>
  );
};

const ProfileHeader = (props) => {
  const openChat = () => {
    console.log("Abrir chat do id do usuario");
  };

  const { colors } = useTheme();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={[styles.profileHeader, { backgroundColor: colors.card }]}>
      <ModalCustom
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        children={<ModalContentProfile />}
      />
      <View
        style={[
          styles.profileHeaderTab,
          colorScheme == "dark"
            ? { borderBottomColor: "#222" }
            : { borderBottomColor: "#e9e9e9" },
        ]}
      >
        <Text style={[styles.profileUsername, { color: colors.text }]}>
          @{props.username}
        </Text>
        <Pressable onPress={toggleModal}>
          <MaterialCommunityIcons name="cog" size={24} color={colors.text} />
        </Pressable>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={props.imageProfile} style={styles.imageProfile} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoContent}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {props.postNumbers}
            </Text>
            <Text style={[styles.infoSubtext, { color: colors.text }]}>
              Publicações
            </Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {props.followers}
            </Text>
            <Text style={[styles.infoSubtext, { color: colors.text }]}>
              Seguidores
            </Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={[styles.infoText, { color: colors.text }]}>
              {props.following}
            </Text>
            <Text style={[styles.infoSubtext, { color: colors.text }]}>
              Seguindo
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.profileBioContainer, { color: colors.text }]}>
        <Text style={[styles.profileBioTitle, { color: colors.text }]}>
          some text
        </Text>
        <Text style={[styles.profileBioText, { color: colors.text }]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          placeat dolor voluptate illum voluptates cumque minima assumenda
          laborum exercitationem culpa.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            props.isFollowing === true
              ? styles.isFollowingStyle
              : styles.followButton,
            { color: colors.text, borderColor: colors.text },
          ]}
          onPress={props.followOnPress}
        >
          <Text
            style={[
              styles.buttonText,
              props.isFollowing === true
                ? { color: colors.text }
                : { color: "#000" },
            ]}
          >
            {props.isFollowing === true ? "Seguindo" : "Seguir"}
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.messageButton,
            colorScheme == "dark"
              ? { borderColor: "#fff" }
              : { borderColor: "#000" },
          ]}
          onPress={openChat}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>
            Mensagem
          </Text>
        </Pressable>
        <Pressable style={styles.reportButton}>
          <MaterialIcons name="report" size={40} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    padding: 10,
  },
  profileHeaderTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  profileUsername: {
    fontSize: 18,
    textTransform: "lowercase",
    fontWeight: "bold",
  },
  profileInfo: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "30%",
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 9999,
  },
  infoContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 22,
  },
  infoSubtext: {
    fontSize: 12,
    fontWeight: "bold",
  },
  profileBioContainer: {
    paddingBottom: 20,
  },
  profileBioTitle: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  followButton: {
    backgroundColor: "#00c4cc",
    width: "40%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  isFollowingStyle: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    width: "40%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  messageButton: {
    borderWidth: 1.5,
    width: "43%",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
  },
  reportButton: {
    width: 40,
    height: 40,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileHeader;
