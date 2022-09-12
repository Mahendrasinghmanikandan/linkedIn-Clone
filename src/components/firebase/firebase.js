import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBts7J2LgqJZVyl34otC3WmL5KwrfCmwKU",
  authDomain: "linkedin-clone-67556.firebaseapp.com",
  projectId: "linkedin-clone-67556",
  storageBucket: "linkedin-clone-67556.appspot.com",
  messagingSenderId: "954630486449",
  appId: "1:954630486449:web:72666d9f23574d5bfae590",
  measurementId: "G-H03QYY6DFC",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db, provider };
