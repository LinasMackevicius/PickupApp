import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login successful, you can navigate to another screen or perform other actions here
        const user = userCredential.user;
        console.log('User logged in successfully:', user);

        navigation.navigate('Client');
        
      })
      .catch((error) => {
        // Handle login errors
        console.error('Login error:', error.message);
      });
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>User Login</Text>

      <TextInput
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
      />

      <TextInput
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, padding: 8 }}
      />

      <Button title="Login" onPress={handleLoginPress} />

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
