"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import * as types from "@@/types/types";

const AuthContext = createContext<any | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<types.User | null>(null);

  const decodeToken = (token: string) => {
    const decode: types.JWTToken = jwtDecode(token);
    const username = decode.username;
    return { username };
  };

  const token = () => {
    const jwtToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwtToken="))
      ?.split("=")[1];
    return jwtToken;
  };

  const authLogin = (token: string) => {
    Cookies.set("jwtToken", token, { expires: 1 }); // expires in x day
    const { username } = decodeToken(token);
    setUser({ username });
  };

  const authLogout = () => {
    Cookies.remove("jwtToken");
    setUser(null);
  };

  const value = { user, setUser, token, authLogin, authLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
