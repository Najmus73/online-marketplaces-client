// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw5bKFl5J7lKfqbkhKiCaFNktms6BQh9Q",
  authDomain: "online-marketplaces-auth.firebaseapp.com",
  projectId: "online-marketplaces-auth",
  storageBucket: "online-marketplaces-auth.appspot.com",
  messagingSenderId: "467147305036",
  appId: "1:467147305036:web:45b8efa43b1b295c7c04e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;