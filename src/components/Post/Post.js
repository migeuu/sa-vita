import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import SoniaImage from "../../../assets/images/sonia.jpg";
import Icon from "react-native-vector-icons/Feather";

const Post = (props) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={SoniaImage} style={styles.profileImage} />
          <Text style={styles.profileUsername}>{props.username}</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionsButton}>
            <Icon name="more-vertical" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fafafa",
  },
  title: {
    color: "#e90a23",
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 9999,
  },
  profileUsername: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 8,
  },
  optionsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Post;
