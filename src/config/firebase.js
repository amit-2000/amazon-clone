import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwRVS8ZY7GOuL94rpHVUCJXIF5AfA7n0I",
  authDomain: "clone-66908.firebaseapp.com",
  projectId: "clone-66908",
  storageBucket: "clone-66908.appspot.com",
  messagingSenderId: "836858081623",
  appId: "1:836858081623:web:ea53525a3f97cd1ad08e12",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword };
