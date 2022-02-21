import {
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ProfileBody = () => {
  const [post, setPost] = useState(true);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => {
          setPost(false);
          console.log(Post);
        }}
      >
        <View style={styles.button}>
          <Text>Post</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPost(true);
          console.log(Post);
        }}
      >
        <View style={styles.button}>
          <Text>Sobre</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#c71",
  },
});

export default ProfileBody;
