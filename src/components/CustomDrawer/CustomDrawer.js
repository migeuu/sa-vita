import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ "paddingTop" : 0}}>
    
      <ImageBackground style={styles.profileContainer} source={require("../../../assets/images/fundo.jpg")}>
          <Image
           source={require("../../../assets/images/sonia.jpg")}
            style={styles.profileImage}
          />
        <Text style={styles.profileName}>Sonia Abel de Andrade</Text>
        <Text style={styles.profileDetails}>Cuidador(a), 52 anos</Text>
      </ImageBackground>

      <View>
        <DrawerItemList {...props}/>
      </View>
      
      </DrawerContentScrollView>
      <Text>Sair</Text>
    </View>
  );
};
export default CustomDrawer;