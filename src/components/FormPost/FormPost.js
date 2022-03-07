import React from "react";
import { Button, TextInput, Text, View, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "../../screens/CreatePostScreen/styles";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(8, ({ min }) => `Título deve conter ao menos ${min} caracteres`)
    .max(50, "Título muito longo!")
    .required("Campo obrigatório"),
  description: Yup.string()
    .min(15, "Descrição muito curta!")
    .max(255, "Limite de caracteres excedido (255)")
    .required("Campo obrigatório"),
  requirements: Yup.string().max(255, "Limite de caracteres excedido (255)"),
});

export const MyReactNativeForm = () => (
  <Formik
    initialValues={{
      title: "",
      description: "",
      requirements: "",
    }}
    validateOnChange={true}
    validationSchema={SignupSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <View style={styles.formContainer}>
        <TextInput
          placeholderTextColor="#999"
          style={styles.textInput}
          name="title"
          placeholder="Título"
          onChangeText={handleChange("title")}
          onBlur={handleBlur("title")}
          value={values.title}
        />
        {errors.title && <Text style={styles.errors}>{errors.title}</Text>}
        <TextInput
          placeholderTextColor="#999"
          multiline={true}
          style={styles.textArea}
          name="description"
          placeholder="Descrição"
          onChangeText={handleChange("description")}
          onBlur={handleBlur("description")}
          value={values.description}
        />
        {errors.description && (
          <Text style={styles.errors}>{errors.description}</Text>
        )}
        <TextInput
          multiline={true}
          placeholderTextColor="#999"
          style={styles.textArea}
          name="requirements"
          placeholder="Requisitos (Opcional)"
          onChangeText={handleChange("requirements")}
          onBlur={handleBlur("requirements")}
          value={values.requirements}
        />
        {errors.requirements && (
          <Text style={styles.errors}>{errors.requirements}</Text>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleSubmit}
          disabled={!isValid}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>criar publicação</Text>
          </View>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);
