import React, { useContext, useState } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ContextApp } from "../../context/Context";
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

const LoginForm = ({ navigation }) => {
  const { colors } = useTheme();
  const { user, setUser } = useContext(ContextApp);
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (values) => {
    let username = values.username;
    try {
      setIsLoading(true);
      const userRequest = await axios.get(
        `http://localhost:5000/users/username/${username}`
      );
      const userData = userRequest.data;
      let newValues = user;

      newValues.id = userData.id;
      newValues.username = userData.username;
      newValues.fullName = userData.fullName;
      newValues.description = userData.description;
      newValues.email = userData.email;
      newValues.password = userData.password;

      setUser(newValues);
      AsyncStorage.setItem("@userlogged_key", user.username);
      setIsLoading(false);
      console.log(user);
    } catch (err) {
      console.error(err.message);
    }
  };

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
        getUser(values);
        navigation.navigate("Home");
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

          {isLoading ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 16,
              }}
            >
              <ActivityIndicator size="large" />
            </View>
          ) : null}

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
              Não tem uma conta?{" "}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Registro")}
              >
                Registre-se
              </Text>
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
