// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC73_wEiZSozCGeb1ZEMBnVx7HgrzFLkjE",
  authDomain: "react-coder-a583a.firebaseapp.com",
  projectId: "react-coder-a583a",
  storageBucket: "react-coder-a583a.firebasestorage.app",
  messagingSenderId: "377543140024",
  appId: "1:377543140024:web:5cae5ea4dacbd5922e0a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
