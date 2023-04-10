// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJpSTsqeTclbKgX8Ce8_CbyXAElItEho",
  authDomain: "doctor-portal-1c4e8.firebaseapp.com",
  projectId: "doctor-portal-1c4e8",
  storageBucket: "doctor-portal-1c4e8.appspot.com",
  messagingSenderId: "398100258920",
  appId: "1:398100258920:web:d02f338c5f263694c3dbdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;