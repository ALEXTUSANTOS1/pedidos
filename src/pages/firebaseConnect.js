import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAMqlJa0wJ5eDs7ofFVJOcFPT0m0Rz7fw8",
  authDomain: "pedidos-5a1b1.firebaseapp.com",
  projectId: "pedidos-5a1b1",
  storageBucket: "pedidos-5a1b1.firebasestorage.app",
  messagingSenderId: "93125515653",
  appId: "1:93125515653:web:d157f4c2daa89267574cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
})
export { db, auth };