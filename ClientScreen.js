import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import { getDatabase, ref, set, push } from 'firebase/database';
import { app, auth, db } from './firebaseConfig';  // Import the initialized Firebase app
import { Route } from '@react-navigation/native';

const ClientScreen = ({ navigation, route }) => {
  const [venue, setVenue] = useState('');
  const [numberOfSets, setNumberOfSets] = useState('');
  const [myPhoto, setMyPhoto] = useState(null);

  useEffect(() => {
    // Check if photo data is received through navigation parameters
    if (route.params && route.params.photo) {
      setMyPhoto(route.params.photo);
    }
  }, [route.params]);

  const sendDataToFirebase = async () => {
    try {
      // Reference to the "venuesData" collection in the database
      const dataRef = ref(db, 'venuesData');
  
      // Use the push method to generate a unique key for each new collection
      const newChildRef = push(dataRef);
  
      // Data to be sent to the database
      const dataToSend = {
        venue: venue,
        numberOfSets: numberOfSets,
        photo: myPhoto,
        // Add more key-value pairs as needed
      };
  
      // Set the data to the newly generated child reference
      await set(newChildRef, dataToSend);
  
      console.log('Data sent to the database successfully.');
    } catch (error) {
      console.error('Error sending data to the database:', error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Client Screen</Text>

      {/* Input box for key1 */}
      <TextInput
        style={styles.input}
        placeholder="Enter venue"
        value={venue}
        onChangeText={(text) => setVenue(text)}
      />

      {/* Input box for key2 */}
      <TextInput
        style={styles.input}
        placeholder="Enter numberOfSets"
        value={numberOfSets}
        onChangeText={(text) => setNumberOfSets(text)}
      />
      
      <Button title="Take A Photo Of Venue" onPress={()=>{navigation.navigate('Camera')}} />

      {/* Button to trigger sending data to the database */}
      <Button title="Submit Data" onPress={sendDataToFirebase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '80%',
  },
});

export default ClientScreen;
