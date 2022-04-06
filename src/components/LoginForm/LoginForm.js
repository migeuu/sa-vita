import React from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import axios from "axios";

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .required("Nome de usuário obrigatório")
    .test(
      "User Exists",
      "Nome de usuário não existe", // <- key, message
      async function (value) {
        let userExists = await axios.get(
          `https://nameless-woodland-42415.herokuapp.com/users/username/${value}`
        );
        if (userExists.data !== null) {
          return true;
        } else {
          return false;
        }
      }
    ),
  password: Yup.string()
    .required("Senha obrigatória")
    .test("Correct password", "Senha incorreta", async function (value) {
      try {
        const username = this.parent.username;
        let res = await axios.get(
          `https://nameless-woodland-42415.herokuapp.com/users/username/${username}`
        );
        let userPass = res.data.password;

        if (userPass == value) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error(error.message);
      }
    }),
});

const LoginForm = () => {
  const { colors } = useTheme();

  const setUser = async (values) => {
    try {
      let res = await axios.get(
        `https://nameless-woodland-42415.herokuapp.com/users/username/${values.username}`
      );
      const userLogged = res.data.username;
      try {
        await AsyncStorage.setItem("@userlogged_key", userLogged);
      } catch (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const allKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getItem("@userlogged_key");
      console.log(keys);
    } catch (e) {
      console.error(e);
    }
  };

  allKeys();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validateOnSubmit={true}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        setUser(values);
      }}
      validationSchema={SignInSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.formContainer}>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.card, color: colors.text },
            ]}
            name="username"
            placeholder="Usuário"
            placeholderTextColor="#555"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
          />
          {errors.username && (
            <Text style={styles.errors}>{errors.username}</Text>
          )}
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.card, color: colors.text },
            ]}
            secureTextEntry={true}
            name="password"
            placeholder="Senha"
            placeholderTextColor="#555"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          {errors.password && (
            <Text style={styles.errors}>{errors.password}</Text>
          )}

          <View style={styles.buttonsBox}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Entrar</Text>
              </View>
            </TouchableOpacity>
            <Text
              style={[styles.textRegisterContainer, { color: colors.text }]}
            >
              Não tem uma conta? <Text style={styles.link}>Registre-se</Text>
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: 300,
    marginBottom: 50,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginVertical: 4,
  },
  errors: {
    color: "red",
    paddingHorizontal: 14,
  },
  buttonsBox: {
    marginVertical: 10,
  },
  buttonContainer: {
    backgroundColor: "#0a84ff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  textRegisterContainer: {
    textAlign: "center",
    marginVertical: 4,
    padding: 10,
  },
  link: {
    color: "#0a84ff",
  },
});

export default LoginForm;
