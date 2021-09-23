// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc2NvgA2XpP5ayhQI2z3lFxb8oW9K-uYY",
  authDomain: "swasti-s-agent-dsfx.firebaseapp.com",
  projectId: "swasti-s-agent-dsfx",
  storageBucket: "swasti-s-agent-dsfx.appspot.com",
  messagingSenderId: "621146481712",
  appId: "1:621146481712:web:bc3685f4a42145aa4f79f5",
  measurementId: "G-SJM2N9Y12X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);