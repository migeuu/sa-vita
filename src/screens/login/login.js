import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import styles from "../styles/login-style";
import TextField from "../components/TextField/TextField";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <TextField 
        label='Email:'
        placeholder="Digite seu email"
      />
      <TextField 
        label='Senha:'
        placeholder="Digite sua senha"
      />
    </SafeAreaView>
  );
}
