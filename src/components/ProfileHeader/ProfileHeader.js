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
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  imageProfile: {
    width: 90,
    height: 90,
    borderRadius: 9999,
  },
});

export default ProfileHeader;
