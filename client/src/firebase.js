// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-6804.firebaseapp.com",
  projectId: "blog-6804",
  storageBucket: "blog-6804.firebasestorage.app",
  messagingSenderId: "950433309672",
  appId: "1:950433309672:web:64699a276a34f4a5a93a5d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
