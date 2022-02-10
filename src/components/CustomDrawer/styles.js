import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor : "#EFFAFF"
  },
  profileContainer: {
    padding: 20,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    width : "100%",
    color: '#545454',
    fontSize: 18,
    paddingLeft : 10,
    marginTop : 10,
    fontWeight: "bold",
  },
  profileDetails: {
    width : "100%",
    color: '#545454',
    fontSize: 14,
    paddingLeft : 10,
    marginBottom : 10
  },
});
export default styles;
