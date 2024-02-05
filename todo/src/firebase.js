// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiBwxe6FBE3VGnF8S7ZhdDq7pZNDBGlLQ",
  authDomain: "todo-c3499.firebaseapp.com",
  projectId: "todo-c3499",
  storageBucket: "todo-c3499.appspot.com",
  messagingSenderId: "728075772395",
  appId: "1:728075772395:web:0e00e310ff9a64740eb9ae",
  measurementId: "G-MWEMTCQFW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);