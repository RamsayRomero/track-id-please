import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../firebase/clientApp';

interface AuthContextArgs {
  user: firebase.User | null;
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  signin: (email: string, password: string) => Promise<firebase.User | null>;
  signup: (email: any, password: any) => Promise<firebase.User | null>;
  signout: () => void;
  sendPasswordResetEmail: (email: any) => void;
  confirmPasswordReset: (code: any, password: any) => void;
}

const authContext = createContext<AuthContextArgs>({
  user: null,
  isSignIn: false,
  setIsSignIn: () => {},
  signin: (email: string, password: string) => Promise.resolve(null),
  signup: (email: string, password: string) => Promise.resolve(null),
  signout: () => {},
  sendPasswordResetEmail: (email: string) => {},
  confirmPasswordReset: (code: string, password: string) => {},
});

interface ProvideAuthProps {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState<firebase.User | null>(null);
  // For auth modal component
  const [isSignIn, setIsSignIn] = useState(false);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signup = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  const sendPasswordResetEmail = (email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code: string, password: string) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    isSignIn,
    setIsSignIn,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
