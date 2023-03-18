// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPEh4RCYWw5NoelzkHo2Yheom_B-UD99Y",
  authDomain: "mussc-2ffe8.firebaseapp.com",
  projectId: "mussc-2ffe8",
  storageBucket: "mussc-2ffe8.appspot.com",
  messagingSenderId: "334548020215",
  appId: "1:334548020215:web:ab25bab8ab56c6d4b69cf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth ;