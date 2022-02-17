import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileHeader = (props) => {
  return (
    <View style={styles.profileHeader}>
      <View style={styles.profileHeaderTab}>
        <Text style={styles.profileUsername}>{props.username}</Text>
        <Pressable>
          <MaterialCommunityIcons name="cog" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.profileInfo}>
        <Image source={props.imageProfile} style={styles.imageProfile} />
        <View style={styles.infoDetails}>
          <View style={styles.infoContent}>
            <Text style={styles.infoText}>{props.followers}</Text>
            <Text style={styles.infoSubtext}>Seguidores</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoText}>{props.following}</Text>
            <Text style={styles.infoSubtext}>Seguindo</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: "#f56e90",
    height: 250,
  },
  profileHeaderTab: {
    backgroundColor: "#45bd00",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  profileUsername: {
    fontSize: 18,
    textTransform: "lowercase",
    fontWeight: "bold",
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 9999,
  },
  infoDetails: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default ProfileHeader;
