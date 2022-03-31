// SearchBar.js
import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchValue, setSearchValue, setClicked }) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          value={searchValue}
          onChangeText={setSearchValue}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ marginRight: 10 }}
            onPress={() => {
              setSearchValue("");
            }}
          />
        )}
      </View>
      {clicked && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
            setSearchValue("");
          }}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "83%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonText: {
    color: "#0a84ff",
  },
});

export default SearchBar;
