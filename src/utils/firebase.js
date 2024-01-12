// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoMdUssrExPoQuX0VUSq3ADJtwcrqvjNs",
  authDomain: "netflixgpt-4652e.firebaseapp.com",
  projectId: "netflixgpt-4652e",
  storageBucket: "netflixgpt-4652e.appspot.com",
  messagingSenderId: "108304312686",
  appId: "1:108304312686:web:67d3157f3d75c11293f97f",
  measurementId: "G-FE66HSHFC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();