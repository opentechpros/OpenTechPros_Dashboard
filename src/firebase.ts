import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Your Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5S5a48lTWySluwLHbzHeKaDlpNMfLwI",
  authDomain: "dashboard-login-d5b5b.firebaseapp.com",
  projectId: "dashboard-login-d5b5b",
  storageBucket: "dashboard-login-d5b5b.firebasestorage.app",
  messagingSenderId: "20397215109",
  appId: "1:20397215109:web:6cae74859eccda67c2c8ec",
  measurementId: "G-7QWHJ93VJW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
