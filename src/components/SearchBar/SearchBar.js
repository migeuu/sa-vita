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
import { useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchValue, setSearchValue, setClicked }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? [styles.searchBar__clicked, { backgroundColor: colors.card }]
            : [styles.searchBar__unclicked, { backgroundColor: colors.card }]
        }
      >
        <TextInput
          style={[styles.input, { color: colors.text }]}
          placeholder="Pesquisar"
          placeholderTextColor="#3d3d3d"
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
            color="#3d3d3d"
            style={styles.crossButton}
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
    padding: 8,
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 8,
    flexDirection: "row",
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  crossButton: {
    marginRight: 5,
    borderRadius: 999,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    width: "100%",
  },
  buttonContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#0a84ff",
  },
});

export default SearchBar;
