import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Appearance,
  Share,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "@react-navigation/native";
import LikeButton from "../LikeButton/LikeButton.jsx";
import CommentButton from "../CommentButton/CommentButton";
import ShareButton from "../ShareButton/ShareButton";
import ModalCustom from "../Modal/Modal";

const colorScheme = Appearance.getColorScheme();

const ModalContentOptions = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Text style={{ color: colors.text }}>Hello!</Text>
    </View>
  );
};

const Post = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Post tal!",
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const { colors } = useTheme();

  return (
    <View
      style={
        (styles.postContainer,
        { backgroundColor: colors.card, marginBottom: 10 })
      }
    >
      <ModalCustom
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        children={<ModalContentOptions />}
      />
      <View
        style={[
          styles.headerContainer,
          colorScheme == "dark"
            ? { borderBottomColor: "#222" }
            : { borderBottomColor: "#e9e9e9" },
        ]}
      >
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} />
          <Text style={[styles.profileUsername, { color: colors.text }]}>
            {props.username}
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionsButton} onPress={toggleModal}>
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
        {props.requirements == null ? null : (
          <Text style={[styles.subTitle, { color: colors.text }]}>
            Requisitos:
          </Text>
        )}
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
        <View style={styles.footerItems}>
          <LikeButton />
          <CommentButton />
        </View>
        <ShareButton onPress={onShare} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 10,
    backgroundColor: "#c91",
  },
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
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    padding: 10,
  },
  footerItems: {
    flexDirection: "row",
  },
});

const modalStyles = (colors) =>
  StyleSheet.create({
    text: {
      color: colors.text,
    },
  });
export default Post;
