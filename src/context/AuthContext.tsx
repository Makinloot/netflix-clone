import { auth, googleProvider } from "../config/firebase";
import firebase from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
  signOut,
  signInWithPopup
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { redirect } from "react-router-dom";

interface ValueTypes {
  currentUser: User | null | undefined;
  handleSignup: (email: string, password: string) => Promise<UserCredential>;
  handleLogin: (email: string, password: string) => Promise<UserCredential>;
  handleGmailAuth: () => Promise<UserCredential>
  handleSignout: () => Promise<void>;
}

const AuthContext = React.createContext<ValueTypes | any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);

  // sign up user
  const handleSignup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const handleLogin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in/up user with Gmail
  const handleGmailAuth = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // sign out
  const handleSignout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: ValueTypes = {
    currentUser,
    handleSignup,
    handleLogin,
    handleGmailAuth,
    handleSignout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
