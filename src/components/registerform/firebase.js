// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database"
import {database} from '../firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAu4I7uN0003CHvxuPv6XXJ1fDYz4XT7rA",
  authDomain: "acmregistrationform.firebaseapp.com",
  databaseURL: "https://acmregistrationform-default-rtdb.firebaseio.com",
  projectId: "acmregistrationform",
  storageBucket: "acmregistrationform.appspot.com",
  messagingSenderId: "505914800729",
  appId: "1:505914800729:web:4e37179688880f56ba8f48",
  measurementId: "G-KVF9LK9K9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
