import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Post from "../../components/Post/Post";
import styles from "./styles";
import { FlatList, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  {
    username: "Miguel Marquiori",
    id: 1,
    title: "Título 1",
    description: "Gostaria de trabalhar com veias",
    requirements: "- Ter mais de 60 anos\n- Ter muito dinheiro na conta",
  },
  {
    username: "Paulinho Battistella",
    id: 2,
    title: "Título 2",
    description: "Gostaria de trabalhar com veias",
    requirements: "- Ter mais de 60 anos\n- Ter muito dinheiro na conta",
  },
  {
    username: "Lucas Naspolini",
    id: 3,
    title: "Título 3",
    description: "Gostaria de trabalhar com veias",
    requirements: "- Ter mais de 60 anos\n- Ter muito dinheiro na conta",
  },
  {
    username: "Ismael Silva Teixeira",
    id: 4,
    title: "Título 4",
    description: "Gostaria de trabalhar com veias",
    requirements: "- Ter mais de 60 anos\n- Ter muito dinheiro na conta",
  },
];

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Post
      username={item.username}
      title={item.title}
      description={item.description}
      requirements={item.requirements}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.postButtonContainer}
        onPress={() => navigation.navigate("Nova publicação")}
      >
        <View style={styles.postButton}>
          <MaterialCommunityIcons name="plus" size={32} color="#fff" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
