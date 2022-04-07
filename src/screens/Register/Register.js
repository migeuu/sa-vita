import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { useTheme } from "@react-navigation/native";

const Register = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <KeyboardAvoidingView
          style={{ backgroundColor: colors.background }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          enabled={true}
        >
          <Text style={[styles.titleForm, { color: colors.text }]}>
            Registrar
          </Text>
          <RegisterForm navigation={navigation}/>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContent: {
    width: "100%",
  },
  titleForm: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Register;
