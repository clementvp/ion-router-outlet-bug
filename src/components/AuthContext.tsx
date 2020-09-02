import React, { useState } from "react";

type ContextProps = {
  loggedIn: boolean;
  authLoading: boolean;
  login: any;
  logout: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

export const Authprovider = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
