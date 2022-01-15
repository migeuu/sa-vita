import { StyleSheet } from "react-native";
import { themeSchema } from "../../themes/themeSchema";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeSchema.colors.bgLight,
  },
  boxLogo: {
    alignItems: "center",
  },
  imageLogo: {
    resizeMode: "cover",
    width: 150,
    height: 150,
  },
  titleContent: {
    position: "relative",
    bottom: "20%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: themeSchema.colors.secondary,
  },
  subText: {
    position: "relative",
    top: "20%",
    fontSize: 26,
    color: "#545454",
    fontWeight: "bold",
  },
  subTextSecondary: {
    position: "relative",
    top: "20%",
    fontSize: 21,
    fontWeight: "100",
    color: "#656565",
  },
  input: {
    width: "90%",
    height: 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: themeSchema.inputColor.bgLight,
    color: "#222",
    fontSize: 16,
  },
  error: {
    color: themeSchema.colors.error,
    fontSize: 14,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: themeSchema.colors.primary,
    height: 65,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: themeSchema.colors.secondary,
    height: 65,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 22,
    color: themeSchema.colors.bgLight,
    fontWeight: "bold",
  },
});
