// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database'; // Import getDatabase


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2SBXsJei6bDkKNssfVOshAV-MnIkAVQ",
  authDomain: "pickupapp-e0355.firebaseapp.com",
  projectId: "pickupapp-e0355",
  storageBucket: "pickupapp-e0355.appspot.com",
  messagingSenderId: "918185794096",
  appId: "1:918185794096:web:a86e8c3d730dbc54732bf5",
  databaseURL: "https://pickupapp-e0355-default-rtdb.europe-west1.firebasedatabase.app"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Use the database
const db = getDatabase(app);

export { app, auth, db };

