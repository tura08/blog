import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd1ev9lR3S_Xw4btfuw9e_6bcceqinGd8",
  authDomain: "blog-v1-69a6d.firebaseapp.com",
  projectId: "blog-v1-69a6d",
  storageBucket: "blog-v1-69a6d.appspot.com",
  messagingSenderId: "392494976833",
  appId: "1:392494976833:web:a4e1dcd70ebe725d965bc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
