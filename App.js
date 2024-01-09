
import React, { useState, useEffect } from 'react';

import { Button, View, Text, FlatList, StyleSheet, StatusBar, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';
import ClientScreen from './ClientScreen.js';
import CameraScreen from './CameraScreen.js';



import styles from './myStyles.js'


function HomeScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'left', backgroundColor: '#1822db' }}>

      <View style={{ marginVertical: 10 }} />
      
      <Pressable style={styles.buttonPressable} onPress={onPressFunction = () => {navigation.navigate('Registration')}}>
      <Text style={styles.buttonText}> REGISTER </Text>
      </Pressable>

    <View style={{ marginVertical: 10 }} />
      
    <Pressable style={styles.buttonPressable} onPress={onPressFunction = () => {navigation.navigate('Login')}}>
      <Text style={styles.buttonText}> LOGIN </Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />

        <Stack.Screen
        name="Registration"
        component= {RegistrationScreen}
        />

        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />

        <Stack.Screen
        name="Client"
        component={ClientScreen}
        />

        <Stack.Screen
        name="Camera"
        component={CameraScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;