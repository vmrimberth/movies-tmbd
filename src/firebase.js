import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {  getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDozZYVx7piF4PMbdyNfpzW0L97undhIhs",
  authDomain: "demoplayer-23522.firebaseapp.com",
  projectId: "demoplayer-23522",
  storageBucket: "demoplayer-23522.firebasestorage.app",
  messagingSenderId: "895563578928",
  appId: "1:895563578928:web:7c4f8f6911e68954adb7f5"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider()
const db= getFirestore(app)
export {auth, provider, signInWithPopup, db}