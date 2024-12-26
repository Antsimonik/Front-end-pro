// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIbh4lNucpTZrcOnZOve835C_BfrJt5aA",
  authDomain: "business-directory-5686c.firebaseapp.com",
  projectId: "business-directory-5686c",
  storageBucket: "business-directory-5686c.appspot.com",
  messagingSenderId: "595928218937",
  appId: "1:595928218937:web:da6ca3712c3d9fe7bc3ce8",
  measurementId: "G-Z6KBG5Z133",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
