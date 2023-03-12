import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";

interface ValueTypes {
  currentUser: User | null | undefined;
  handleSignup: (email: string, password: string) => Promise<UserCredential>;
  handleLogin: (email: string, password: string) => Promise<UserCredential>;
}

const AuthContext = React.createContext<ValueTypes | any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);

  // register user
  const handleSignup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const handleLogin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
