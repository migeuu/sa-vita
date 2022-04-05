import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setClicked(false);
        setSearchValue("");
      }}
    >
      <SafeAreaView>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          clicked={clicked}
          setClicked={setClicked}
        />
        <Text>some text</Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
