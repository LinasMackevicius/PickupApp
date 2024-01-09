import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { app, auth, db } from "./firebaseConfig.js";

// Function to register a new user with email and password
const registerUserWithEmailAndPassword = async (email, password) => {
  try {
    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Access the user information (optional)
    const user = userCredential.user;

    console.log("User registered successfully:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {
    // Call the registerUserWithEmailAndPassword function when the button is pressed
    registerUserWithEmailAndPassword(email, password)
      .then(() => {
        // Registration successful, you can navigate to another screen or perform other actions here
        console.log("Registration successful!");
      })
      .catch((error) => {
        // Handle registration errors
        console.error("Registration error:", error.message);
      });
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>User Registration</Text>

      <TextInput
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
      />

      <TextInput
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
      />

      <Button title="Register" onPress={handleRegisterPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
