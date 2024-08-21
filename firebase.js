// Import the necessary Firebase SDK functions
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCUrt1Nf17N777WsaXl5r6I8GUL6eNA3L4",
  authDomain: "facebook-d20f0.firebaseapp.com",
  projectId: "facebook-d20f0",
  storageBucket: "facebook-d20f0.appspot.com",
  messagingSenderId: "228599625064",
  appId: "1:228599625064:web:df142b32ac12253a4992dd"
};

// Initialize Firebase app (if it hasn't been initialized already)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
