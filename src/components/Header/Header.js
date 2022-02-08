import React from "react";
import { Image, StyleSheet, View } from "react-native";
import VitaLogo from "../../../assets/images/vita-logo.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={VitaLogo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 80,
    width: 80,
  },
});

export default Header;
