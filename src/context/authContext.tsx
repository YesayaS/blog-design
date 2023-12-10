"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "@@/types/types";

const AuthContext = createContext<any | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<types.User | null>(null);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    const jwt = loadjwt();
    if (jwt) {
      const { user }: { user: types.User } = jwtDecode(jwt);
      setUser(user);
    }
  }, [token]);

  const loadjwt = () => {
    return Cookies.get("jwt");
  };

  const authLogin = (token: string) => {
    setToken(token);
    Cookies.set("jwt", token);
  };

  const authLogout = () => {
    Cookies.remove("jwt");
    setUser(null);
    return true;
  };

  const value = { user, setUser, token, authLogin, authLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
