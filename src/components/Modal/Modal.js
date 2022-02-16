import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const ModalOptions = (props) => {
  return (
    <Modal
      {...props}
      backdropOpacity={0.25}
      isVisible={props.isVisible}
      style={styles.modalContainer}
      swipeDirection="down"
    >
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
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
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
});

export default ModalOptions;
