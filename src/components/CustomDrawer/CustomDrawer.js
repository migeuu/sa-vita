import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import styles from "./styles";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#e6e6e6" }}
      >
        <ImageBackground style={styles.profileContainer} source={require("../../../assets/images/backgroundprofile.jpg")}>
          <Image
            source={require("../../../assets/images/afolou.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Edivaldo Júnior</Text>
          <Text style={styles.profileDetails}>Cuidador, 24 anos</Text>
        </ImageBackground>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
      <Text>Sair</Text>
    </View>
  );
};

export default CustomDrawer;
