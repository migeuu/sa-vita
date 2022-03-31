import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <SafeAreaView>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        clicked={clicked}
        setClicked={setClicked}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
