import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
  const [error, setError] = useState("");
  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('')
      const {username, password} = formValue;
      if(username !== user.username || password !== user.password){
        setError('Incorrect username or password.')
      } else {
        login(userDetails)
      }
    }
  })
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in to this Project</Text>
      <TextInput
        placeholder="User Name"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text)=>formik.setFieldValue('username', text)}
      />
      <TextInput 
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text)=>formik.setFieldValue('password', text)}
      />
      <View style={{width: '90%'}}>
        <Button title="Sign in" onPress={formik.handleSubmit} />
      </View>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

function initialValues() {
  return {
    username: '',
    password: ''
  }
}

function validationSchema() {
  return {
    username: Yup.string().required("The user must be mandatory."),
    password: Yup.string().required("The password must be mandatory.")
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%'
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});