// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJH7DVZ_N5fseEgadDP00ENSP9wdyZVIc",
  authDomain: "portofolio-f096a.firebaseapp.com",
  projectId: "portofolio-f096a",
  storageBucket: "portofolio-f096a.appspot.com",
  messagingSenderId: "313188554217",
  appId: "1:313188554217:web:d8ae2bcf96491e3bf6a778",
  measurementId: "G-S08GFJC1D7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);