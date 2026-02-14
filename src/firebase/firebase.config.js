// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSAJETLnkBm0Hshu7LrWmmQJe49JBP8mg",
  authDomain: "ai-model-inventory-manager-ai.firebaseapp.com",
  projectId: "ai-model-inventory-manager-ai",
  storageBucket: "ai-model-inventory-manager-ai.firebasestorage.app",
  messagingSenderId: "673862546555",
  appId: "1:673862546555:web:09e936314c3268baf1dede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);