// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrZRCRZqIk-EPa0vHLj7D4M6zBIAKKiKw",
    authDomain: "react-todo-list-c6c18.firebaseapp.com",
    projectId: "react-todo-list-c6c18",
    storageBucket: "react-todo-list-c6c18.appspot.com",
    messagingSenderId: "700811956959",
    appId: "1:700811956959:web:6b9f449beb6fb4ed540f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;