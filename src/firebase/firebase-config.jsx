// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
    apiKey: "AIzaSyClbq6kEgDMeMGD3TbRrdNSwb7Gxo5jFro",
    authDomain: "leetbeck-blog.firebaseapp.com",
    projectId: "leetbeck-blog",
    storageBucket: "leetbeck-blog.appspot.com",
    messagingSenderId: "1055504054462",
    appId: "1:1055504054462:web:9880c62abdc9eb0b6dc6ef",
    measurementId: "G-2D5RV3J329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db };
