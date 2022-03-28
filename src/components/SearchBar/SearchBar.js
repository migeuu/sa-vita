import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

const SearchBar = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const { colors } = useTheme();

  return (
    <View style={[styles.flexContainer, { backgroundColor: colors.card }]}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Pesquisar"
          style={styles.input}
          placeholderTextColor="#707070"
          clearButtonMode="while-editing"
        />
        <TouchableHighlight style={styles.buttonContainer}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 8,
  },
  inputDefault: {
    fontSize: 16,
    padding: 40,
  },
  buttonContainer: {
    display: "none",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#0a84ff",
    fontWeight: "bold",
  },
});

export default SearchBar;
