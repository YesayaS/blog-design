"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "@@/types/types";

const AuthContext = createContext<any | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<types.User | null>(null);
  const [logged, setlogged] = useState<boolean>(false);

  useEffect(() => {
    const jwt = loadjwt();

    if (jwt) {
      const decodeJWT: types.JWTToken = jwtDecode(jwt);
      const user = { username: decodeJWT.username };
      setUser(user);
      setlogged(true);
    } else {
      setUser(null);
    }
  }, [logged]);

  const loadjwt = () => {
    return Cookies.get("jwt");
  };

  const authLogin = (token: string) => {
    setlogged(true);
    Cookies.set("jwt", token);
  };

  const authLogout = () => {
    Cookies.remove("jwt");
    setlogged(false);
    setUser(null);
    return true;
  };

  const value = { user, setUser, authLogin, authLogout, loadjwt };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
