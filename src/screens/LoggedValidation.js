import React, { useState, useEffect, useContext } from "react";
import { ContextApp } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import TabComponent from "../components/TabComponent/TabComponent";
import RegisterLoginStackScreen from "./Stacks/RegisterLoginStackScreen";

const LoggedValidation = () => {
  const [isUserLogged, setIsUserLogged] = useState();
  const { user, setUser } = useContext(ContextApp);

  const checkLogged = async () => {
    const itemStored = await AsyncStorage.getItem("@userlogged_key");

    if (itemStored) {
      try {
        const userLocallyLogged = await axios.get(
          `https://nameless-woodland-42415.herokuapp.com/users/username/${itemStored}`
        );
        const userData = userLocallyLogged.data;
        let newValues = user;

        newValues.id = userData.id;
        newValues.username = userData.username;
        newValues.fullName = userData.fullName;
        newValues.description = userData.description;
        newValues.email = userData.email;
        newValues.password = userData.password;

        setUser(newValues);
        setIsUserLogged(true);
      } catch (e) {}
    } else {
    }
  };

  useEffect(() => {
    checkLogged();
  }, []);

  return (
    <>
      {isUserLogged === true ? <TabComponent /> : <RegisterLoginStackScreen />}
    </>
  );
};

export default LoggedValidation;

// import React from "react";
// import { useColorScheme } from "react-native";
// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
// } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
// import ContextProvider from "./src/context/Context";
// import LoggedValidation from "./src/screens/LoggedValidation";

// function App() {
//   const scheme = useColorScheme();

//   return (
//     <ContextProvider>
//       <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
//         <StatusBar style="light" />
//         <SafeAreaProvider>
//           <StatusBar style="light" />
//           <LoggedValidation />
//         </SafeAreaProvider>
//       </NavigationContainer>
//     </ContextProvider>
//   );
// }

// export default App;
