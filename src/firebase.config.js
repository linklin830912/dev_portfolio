import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByE4STrHRFWxVqG6niDfAN5jXYEsltY48",
  authDomain: "devportfolio-9775b.firebaseapp.com",
  projectId: "devportfolio-9775b",
  storageBucket: "devportfolio-9775b.appspot.com",
  messagingSenderId: "907569250518",
  appId: "1:907569250518:web:6dbd141fc8392efb984977",
  measurementId: "G-6P6KXVCX7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const fs = getFirestore(app);
