import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import themeSchema from "../../themes/themeSchema";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          source={require("../../../assets/images/vita-logo.png")}
          style={styles.imageLogo}
        />
        <View style={styles.titleContent}>
          <Text style={styles.title}>Vita</Text>
          <Text style={styles.subText}>Seja bem-vindo</Text>
          <Text style={styles.subTextSecondary}>Acesse sua conta</Text>
        </View>
      </View>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={themeSchema.inputColor.placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "E-mail não pode estar vazio",
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email inserido não condiz com o padrão",
          },
        }}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={themeSchema.inputColor.placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Senha não pode estar vazia",
          },
          minLength: {
            value: 8,
            message: "Senha deve ter pelo menos 8 caracteres",
          },
          maxLength: {
            value: 200,
            message: "Senha deve ter até 200 caracteres",
          },
        }}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>
      <TouchableOpacity
        disabled={!isValid}
        activeOpacity={0.7}
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
