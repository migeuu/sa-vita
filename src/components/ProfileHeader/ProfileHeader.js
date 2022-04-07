import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  Appearance,
} from "react-native";
import React, { useState, useContext } from "react";
import { ContextApp } from "../../context/Context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import ModalCustom from "../Modal/Modal";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const colorScheme = Appearance.getColorScheme();

const ModalContentProfile = () => {
  const { user, setUser } = useContext(ContextApp);
  const deletarPerfil = async () => {
    try {
      let deleteId = user.id;
      const deleteUser = await axios.delete(
        `https://nameless-woodland-42415.herokuapp.com/users/${deleteId}`
      );
      console.log(deleteUser.status);
      AsyncStorage.clear();
    } catch (e) {}
  };

  return (
    <View style={styles.modalContent}>
      <Button title="Deletar" onPress={deletarPerfil} />
    </View>
  );
};

const ProfileHeader = (props) => {
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
          {props.title}
        </Text>
        <Text style={[styles.profileBioText, { color: colors.text }]}>
          {props.description}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.buttonEdit,
            { color: colors.text, borderColor: colors.text },
          ]}
          onPress={props.followOnPress}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>
            Editar
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
  infoContainer: {
    width: "100%",
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
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonEdit: {
    display: "flex",
    justifyContent: "center",
    width: "85%",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "white",
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
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
