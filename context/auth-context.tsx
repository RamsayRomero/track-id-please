import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../firebase/clientApp';
import AuthModal from '../components/authModal';

interface AuthContextInterface {
  user: firebase.User | null;
  signin: (email: string, password: string) => Promise<firebase.User | null>;
  signup: (
    email: any,
    password: any,
    username: string
  ) => Promise<firebase.User | null>;
  signout: () => void;
  isSignIn: boolean;
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  authModalIsOpen: boolean;
  setAuthModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const authContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

interface ProvideAuthProps {
  children: React.ReactNode;
}

export function ProvideAuth({ children }: ProvideAuthProps) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <AuthModal />
      {children}
    </authContext.Provider>
  );
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
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);
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
  const signup = (email: string, password: string, username: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { user } = response;
        if (user) {
          firebase
            .firestore()
            .doc(`users/${user.uid}`)
            .set({
              image: user.photoURL,
              name: user.displayName ? user.displayName : username,
              score: 0,
            });
        }
        setUser(user);
        return user;
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
    signin,
    signup,
    signout,
    isSignIn,
    setIsSignIn,
    authModalIsOpen,
    setAuthModalIsOpen,
  };
}
