import React from "react";
import { Image } from "react-native";
import VitaLogo from "../../../assets/images/vita-logo.png";

const LogoHeader = () => {
  return <Image source={VitaLogo} style={styles.logoImage} />;
};

const styles = StyleSheet.create({
  logoImage: {
    height: 50,
    width: 50,
  },
});

export default LogoHeader;
