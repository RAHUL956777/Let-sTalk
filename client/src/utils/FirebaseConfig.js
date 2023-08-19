import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCBsV-X1OGKrMmhi5omkzQtOBfaj6tFug",
  authDomain: "let-stalk-dc229.firebaseapp.com",
  projectId: "let-stalk-dc229",
  storageBucket: "let-stalk-dc229.appspot.com",
  messagingSenderId: "757167406730",
  appId: "1:757167406730:web:e3cf10a784de7e19c67773",
  measurementId: "G-GD6ZXC9VZJ",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
