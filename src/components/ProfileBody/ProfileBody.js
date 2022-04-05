import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import Post from "../Post/Post";

const ProfileBody = () => {
  const [post, setPost] = useState(true);

  const { colors } = useTheme();

  return (
    <View>
      <View style={[styles.buttonContainer, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          onPress={() => {
            setPost(true);
          }}
        >
          <View
            style={[
              styles.button,
              post == true
                ? { borderBottomColor: "#00c4cc" }
                : { borderBottomColor: "#323232" },
            ]}
          >
            <Text style={[styles.buttonTextBar, { color: colors.text }]}>
              Post
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPost(false);
          }}
        >
          <View
            style={[
              styles.button,
              post == false
                ? { borderBottomColor: "#00c4cc" }
                : { borderBottomColor: "#323232" },
            ]}
          >
            <Text style={[styles.buttonTextBar, { color: colors.text }]}>
              Sobre
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {post == true ? (
        <Post />
      ) : (
        <View>
          <Text>SOBRE</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
  buttonTextBar: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ProfileBody;
