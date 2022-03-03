import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  formContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
  textInput: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
    borderRadius: 4,
    padding: 8,
  },
  textArea: {
    borderRadius: 4,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    padding: 8,
    paddingBottom: 100,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "#00c4cc",
    padding: 16,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "#00c4cc",
    fontWeight: "600",
    letterSpacing: 2,
  },
  errors: { fontSize: 10, color: "red", fontWeight: "bold" },
});

export default styles;
