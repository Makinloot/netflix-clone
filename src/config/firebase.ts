import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

import { FIREBASE_KEY, FIREBASE_APP_ID } from "../../key";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflix-clone-80d7f.firebaseapp.com",
  projectId: "netflix-clone-80d7f",
  storageBucket: "netflix-clone-80d7f.appspot.com",
  messagingSenderId: "507664098024",
  appId: FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()