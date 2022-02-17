// import components
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Appearance,
} from "react-native";
import SoniaImage from "../../../assets/images/sonia.jpg";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "@react-navigation/native";
import LikeButton from "../LikeButton/LikeButton.jsx";

const colorScheme = Appearance.getColorScheme();

const Post = (props) => {
  const { colors } = useTheme();
  const abrirModal = () => {
    alert("Abrir modal");
  };
  return (
    <View style={(styles.postContainer, { backgroundColor: colors.card })}>
      <View
        style={[
          styles.headerContainer,
          colorScheme == "dark"
            ? { borderBottomColor: "#222" }
            : { borderBottomColor: "#e9e9e9" },
        ]}
      >
        <View style={styles.profileContainer}>
          <Image source={SoniaImage} style={styles.profileImage} />
          <Text style={[styles.profileUsername, { color: colors.text }]}>
            {props.username}
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionsButton} onPress={abrirModal}>
            <Icon name="more-vertical" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={[styles.title, { color: colors.text }]}>
          {props.title}
        </Text>
        <Text style={[styles.description, { color: colors.text }]}>
          {props.description}
        </Text>
        <Text style={[styles.subTitle, { color: colors.text }]}>
          Requisitos
        </Text>
        <Text style={[styles.requirements, { color: colors.text }]}>
          {props.requirements}
        </Text>
      </View>
      <View
        style={[
          styles.footerContainer,
          colorScheme == "dark"
            ? { borderTopColor: "#222" }
            : { borderTopColor: "#e9e9e9" },
        ]}
      >
        <LikeButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 9999,
  },
  profileUsername: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 8,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "600",
  },
  subTitle: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: "500",
  },
  footerContainer: {
    borderTopWidth: 1,
    padding: 10,
  },
});

export default Post;
