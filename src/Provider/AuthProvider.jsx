import React, {useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
   //   sign In 
   const signIn = (email,password) => {
      return signInWithEmailAndPassword(auth, email,password);
   }

  //Sign Out 
  const logOut = () => {
    return signOut(auth)
    
  }

  // reset password 
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  // updateUser 
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  //GoogleSignIn

  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  }

//   onAuthStateChanged 
  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
   })
   return () => {
      unSubscribe();
   }
  }, [])

  const AuthData = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUser,
    googleSignIn,
    githubSignIn,
    forgotPassword,
    
  };

  return (
    <AuthContext.Provider value={AuthData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
