import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../components/Post/Post";
import styles from "./styles";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const { colors } = useTheme();

  const DATA_POST = async (req, res) => {
    try {
      const DATA_ITEM_POST = await fetch("http://localhost:5000/posts");
      res.json(DATA_ITEM_POST);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Post
        username="Bruno Ecker"
        title="Desenvolvedor Front End ReactJS"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, asperiores? Quisquam quae ipsam corrupti voluptatem reprehenderit ad fugiat sit fugit."
        requirements="Olá Marilene!"
      />
      <TouchableOpacity
        style={styles.newPostButton}
        onPress={() => navigation.navigate("Nova publicação")}
      >
        <View style={styles.newPostButtonContainer}>
          <MaterialCommunityIcons name="plus" size={32} color="black" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
