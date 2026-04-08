import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCT8hfxuQ7xlrX71hCUgy9uVEPORIAGg",
  authDomain: "blogify-964d1.firebaseapp.com",
  projectId: "blogify-964d1",
  storageBucket: "blogify-964d1.firebasestorage.app",
  messagingSenderId: "713610830880",
  appId: "1:713610830880:web:40180944349314f73f0845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);