// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_nS1EmD_-QRN5Fi2njoq6u9aHPeeH_RM",
  authDomain: "find-a-tutor-febdb.firebaseapp.com",
  projectId: "find-a-tutor-febdb",
  storageBucket: "find-a-tutor-febdb.appspot.com",
  messagingSenderId: "938535787430",
  appId: "1:938535787430:web:27b6ce7d28af87a0520d67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
