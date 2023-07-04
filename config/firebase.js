// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNPGuTTQruHwpZw4W--DDZflR1-lVTTdw",
  authDomain: "react-native-login-84926.firebaseapp.com",
  projectId: "react-native-login-84926",
  storageBucket: "react-native-login-84926.appspot.com",
  messagingSenderId: "850474330808",
  appId: "1:850474330808:web:0c48fb0ef86b483b54a24d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);