/* eslint-disable no-unused-vars */
import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCTJLhxqX94LvdXP5wEmVV43LZi20Kwptg",
  authDomain: "bikeapp-f84ca.firebaseapp.com",
  databaseURL: "https://bikeapp-f84ca-default-rtdb.firebaseio.com",
  projectId: "bikeapp-f84ca",
  storageBucket: "bikeapp-f84ca.appspot.com",
  messagingSenderId: "802349562949",
  appId: "1:802349562949:web:12a6816290bb63eb4a372c",
  measurementId: "G-T9RMCCV2HD"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth};
export default firebaseDB.database().ref();