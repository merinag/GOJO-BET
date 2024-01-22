// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-houses.firebaseapp.com",
    projectId: "mern-houses",
    storageBucket: "mern-houses.appspot.com",
    messagingSenderId: "489507695473",
    appId: "1:489507695473:web:1583286fd6c9623bc224d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);