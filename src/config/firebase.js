// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdr6_JClbTGNQPXur8IiSpa2dfNpECKwo",
  authDomain: "app-achou-unirios.firebaseapp.com",
  projectId: "app-achou-unirios",
  storageBucket: "app-achou-unirios.appspot.com",
  messagingSenderId: "688115037081",
  appId: "1:688115037081:web:c17878e1c33f90d3cb9908",
  measurementId: "G-ETZBN72FB8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
