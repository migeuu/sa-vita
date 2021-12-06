import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "../styles/login-style";
import TextField from "../components/TextField/TextField";

const fieldValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio.")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min("A senha deve conter pelo menos 6 dígitos"),
});

export default function LoginScreen() {
  const { register, setValue, handleSubmit, errors } = useForm({
    validationSchema: fieldValidationSchema,
  });
  const onSubmit = (data) => Alert.alert(data.email, data.password);

  useEffect(() => {
    register("email");
    register("password");
  }, [register]);

  return (
    <View style={styles.container}>
      <TextField
        error={errors?.email}
        label="Email:"
        placeholder="Digite seu email"
        onChangeText={(text) => setValue("email", text)}
      />
      <TextField
        error={errors?.password}
        label="Senha:"
        placeholder="Digite sua senha"
        onChangeText={(text) => setValue("password", text)}
      />
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}
