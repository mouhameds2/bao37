import React, { createContext, useContext, useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(pb.authStore.model);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = pb.authStore.onChange((token, model) => {
      setCurrentUser(model);
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const authData = await pb.collection('profiles').authWithPassword(email, password, { $autoCancel: false });
    setCurrentUser(authData.record);
    return authData;
  };

  const loginWithGoogle = () => {
    return pb.collection('profiles').authWithOAuth2({ provider: 'google' })
      .then((authData) => {
        setCurrentUser(authData.record);
        return authData;
      });
  };

  const signup = async (data) => {
    const record = await pb.collection('profiles').create({
      ...data,
      emailVisibility: true,
      role: 'customer'
    }, { $autoCancel: false });
    await login(data.email, data.password);
    return record;
  };

  const logout = () => {
    pb.authStore.clear();
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    signup,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);