import { StyleSheet } from "react-native";
import { mainFont } from "../../constants/mainFont/mainFont";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  label: {
    fontFamily: mainFont,
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    fontFamily: mainFont,
    width: "90%",
    fontSize: 16,
  },
  errorMessage: {
    fontFamily: mainFont,
    fontSize: 12,
    color: "#ff0000",
  },
});
