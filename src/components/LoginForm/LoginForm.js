import React from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTheme } from "@react-navigation/native";
import axios from "axios";

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .required("Nome de usuário obrigatório")
    .test(
      "E-mail único",
      "E-mail já usado", // <- key, message
      function (value) {
        return new Promise((resolve, reject) => {
          axios
            .get(`https://nameless-woodland-42415.herokuapp.com/users/username/${value}`)
            .then((res) => {
              resolve(true);
            })
            .catch((error) => {
              if (
                error.response.data.content ===
                "The email has already been taken."
              ) {
                resolve(false);
              }
            });
        });
      }
    ),
  password: Yup.string().required("Senha obrigatória"),

});

const LoginForm = () => {
  const { colors } = useTheme();

  const getUser = (values) => {
    let payload = {
      username: values.username,
      password: values.password,
    };
    let res = axios.get("http://localhost:5000/users", payload);
    let data = res.data;
    console.log(data);
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
