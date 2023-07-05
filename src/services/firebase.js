// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC645rcQnPnFq7ijC3hWHHE0xA1KFD7sug",
  authDomain: "iconic-exchange-355415.firebaseapp.com",
  databaseURL: "https://iconic-exchange-355415-default-rtdb.firebaseio.com",
  projectId: "iconic-exchange-355415",
  storageBucket: "iconic-exchange-355415.appspot.com",
  messagingSenderId: "111735437319",
  appId: "1:111735437319:web:8226df9f7d01d723a192a2",
  measurementId: "G-JGCNT3Q3N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const authFirebase = getAuth(app);
//const analytics = getAnalytics(firebase);