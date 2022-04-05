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

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required("Nome de usuário obrigatório")
    .test(
      "E-mail único",
      "E-mail já usado", // <- key, message
      function (value) {
        return new Promise((resolve, reject) => {
          axios
            .get(`http://localhost:5000/users`)
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
  fullName: Yup.string().required("Nome completo obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .max(255)
    .required("E-mail obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Senhas devem ser iguais"
  ),
});

const RegisterForm = () => {
  const { colors } = useTheme();

  const createUser = (values) => {
    let payload = {
      username: values.username,
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    };
    let res = axios.post("http://localhost:5000/users", payload);
    let data = res.data;
    console.log(data);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validateOnSubmit={true}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        createUser(values);
      }}
      validationSchema={SignupSchema}
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
            name="fullName"
            placeholder="Nome Completo"
            placeholderTextColor="#555"
            onChangeText={handleChange("fullName")}
            onBlur={handleBlur("fullName")}
            value={values.fullName}
          />
          {errors.fullName && (
            <Text style={styles.errors}>{errors.fullName}</Text>
          )}
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.card, color: colors.text },
            ]}
            name="email"
            placeholder="E-mail"
            placeholderTextColor="#555"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {errors.email && <Text style={styles.errors}>{errors.email}</Text>}
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
          <TextInput
            style={[
              styles.input,
              { backgroundColor: colors.card, color: colors.text },
            ]}
            secureTextEntry={true}
            name="passwordConfirm"
            placeholder="Confirmar senha"
            placeholderTextColor="#555"
            onChangeText={handleChange("passwordConfirm")}
            onBlur={handleBlur("passwordConfirm")}
            value={values.passwordConfirm}
          />
          {errors.passwordConfirm && (
            <Text style={styles.errors}>{errors.passwordConfirm}</Text>
          )}
          <View style={styles.buttonsBox}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}
            >
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </View>
            </TouchableOpacity>
            <Text
              style={[styles.textRegisterContainer, { color: colors.text }]}
            >
              Tem uma conta? <Text style={styles.link}>Conecte-se</Text>
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

export default RegisterForm;
