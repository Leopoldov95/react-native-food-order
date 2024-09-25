import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";
import { Link, Stack } from "expo-router";

export default function CreateProductScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  const validateInput = () => {
    if (!email) {
      setErrors("Email is Required");
      return false;
    }

    // check email validity
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      setErrors("Email is invalid");
      return false;
    }

    if (!password) {
      setErrors("Password is required");
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (!validateInput()) {
      return; // stop the execution
    }
    console.warn("SIGN IN");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign In" }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="john@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder=""
        secureTextEntry={true}
        style={styles.input}
      />

      <Text style={styles.error}>{errors}</Text>
      <Button onPress={onSubmit} text={"Sign In"} />
      <Link href="/(auth)/sign-up" style={styles.link}>
        <Text style={styles.linkText}>Create an account</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  error: {
    color: "red",
  },
  link: {
    textAlign: "center",
    marginTop: 5,
  },
  linkText: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
