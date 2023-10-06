// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi9ZleddEKJAbyH3yONypWLgoUUOg89dk",
  authDomain: "instagram-clone-v2-66742.firebaseapp.com",
  projectId: "instagram-clone-v2-66742",
  storageBucket: "instagram-clone-v2-66742.appspot.com",
  messagingSenderId: "192468695485",
  appId: "1:192468695485:web:f8ea4206000621c1fcbad4",
  measurementId: "G-2QDMPH24H4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();

export { app, auth, db, storage };
