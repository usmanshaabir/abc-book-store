// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQUAO7GHj62hzQyaq-Us4N_X28yTY8QGo",
    authDomain: "abc-book-store-90178.firebaseapp.com",
    projectId: "abc-book-store-90178",
    storageBucket: "abc-book-store-90178.appspot.com",
    messagingSenderId: "897296169445",
    appId: "1:897296169445:web:93aabac94e1ad6167a170c",
    measurementId: "G-L//V75BDB0YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app)

export { analytics, auth, firestore }