import React from "react";
import { View } from "react-native";
import Post from "../../components/Post/Post";
import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <Post
        username="Meguel Marqueore"
        title="Desenvolvedor Front End ReactJS"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, asperiores? Quisquam quae ipsam corrupti voluptatem reprehenderit ad fugiat sit fugit."
      />
    </View>
  );
};

export default Home;
