import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there is a persisted authentication state in local storage
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const login = () => {
    // Perform login logic
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true'); // Persist authentication state in local storage
  };

  const logout = () => {
    // Perform logout logic
    setLoggedIn(false);
    localStorage.removeItem('loggedIn'); // Remove persisted authentication state from local storage
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
