// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgmdzD1L8SjsFjS0wjShB9rPJyK7Wcma8",
  authDomain: "react-next-shop-app-6687f.firebaseapp.com",
  projectId: "react-next-shop-app-6687f",
  storageBucket: "react-next-shop-app-6687f.appspot.com",
  messagingSenderId: "451356810821",
  appId: "1:451356810821:web:edd1a7b444feb1656a4d2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;
