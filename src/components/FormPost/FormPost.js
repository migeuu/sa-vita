// Formik x React Native example
import React from "react";
import { Button, TextInput, Text } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "../../screens/CreatePostScreen/styles";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(8, ({ min }) => `Título deve conter ao menos ${min} caracteres`)
    .max(50, "Título muito longo!")
    .required("Obrigatório"),
  description: Yup.string()
    .min(15, "Descrição muito curta!")
    .max(255, "Limite de caracteres excedido (255)")
    .required("Obrigatório"),
  requirements: Yup.string()
    .max(255, "Limite de caracteres excedido (255)")
    .required("Obrigatório"),
});

export const MyReactNativeForm = (props) => (
  <Formik
    initialValues={{
      title: "",
      description: "",
      requirements: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <>
        <TextInput
          style={styles.textInput}
          name="title"
          placeholder="Título"
          onChangeText={handleChange("title")}
          onBlur={handleBlur("title")}
          value={values.title}
        />
        {errors.title && (
          <Text style={{ fontSize: 10, color: "red", fontWeight: "bold" }}>
            {errors.title}
          </Text>
        )}
        <TextInput
          multiline={true}
          style={styles.textInput}
          name="description"
          placeholder="Descrição"
          onChangeText={handleChange("description")}
          onBlur={handleBlur("description")}
          value={values.description}
        />
        {errors.description && (
          <Text style={{ fontSize: 10, color: "red", fontWeight: "bold" }}>
            {errors.description}
          </Text>
        )}
        <TextInput
          style={styles.textInput}
          name="requirements"
          placeholder="Requisitos"
          onChangeText={handleChange("requirements")}
          onBlur={handleBlur("requirements")}
          value={values.requirements}
        />
        {errors.requirements && (
          <Text style={{ fontSize: 10, color: "red", fontWeight: "bold" }}>
            {errors.requirements}
          </Text>
        )}
        <Button onPress={handleSubmit} title="LOGIN" disabled={!isValid} />
      </>
    )}
  </Formik>
);
