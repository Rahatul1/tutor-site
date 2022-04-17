// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2hgcAyQK09r8GVprqmwGdSsfK4ZV-66w",
  authDomain: "find-a-tutor-526e2.firebaseapp.com",
  projectId: "find-a-tutor-526e2",
  storageBucket: "find-a-tutor-526e2.appspot.com",
  messagingSenderId: "993998775465",
  appId: "1:993998775465:web:5422081ddff234fcc5f5b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
