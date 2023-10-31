import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj0fF5b18ffAiL8bDlPnln95bT-KTgm3g",
  authDomain: "blog-v1-6563c.firebaseapp.com",
  projectId: "blog-v1-6563c",
  storageBucket: "blog-v1-6563c.appspot.com",
  messagingSenderId: "211352576971",
  appId: "1:211352576971:web:48b28ff3848abf05434c4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
