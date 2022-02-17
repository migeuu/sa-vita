import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../components/Post/Post";
import styles from "./styles";

const Home = () => {
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
        requirements="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempora totam, enim natus qui cupiditate ab explicabo, tenetur harum, odio pariatur. Quae exercitationem, rem sunt ipsa tempora eligendi? Neque rerum, mollitia nostrum a doloremque iusto aspernatur quibusdam provident blanditiis exercitationem!"
      />
    </SafeAreaView>
  );
};

export default Home;
