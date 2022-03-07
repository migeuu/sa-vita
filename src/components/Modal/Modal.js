import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import { useTheme } from "@react-navigation/native";

const ModalCustom = (props) => {
  const { colors } = useTheme();

  return (
    <Modal
      {...props}
      backdropOpacity={0.25}
      isVisible={props.isVisible}
      style={styles.modalContainer}
      swipeDirection="down"
    >
      <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
        {props.children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default ModalCustom;
