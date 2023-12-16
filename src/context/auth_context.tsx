import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import performLogin from "../lib/perform-login";

interface AuthInterface {
  isAuthenticated: boolean;
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
  loading: boolean;
}

const AuthCtx = createContext({} as AuthInterface);

const AuthProvider = (props: WithChildren) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authStatus: string = localStorage.getItem("vin-auth-status") ?? "false";

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    authStatus === "true"
  );

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const resp = await performLogin(email, password);
  
    setLoading(false);
      if (!resp.access_token) {
      // toast('error', 'Request failed!!!', 'invalid username or password');
      return;
    }
    localStorage.setItem("vin-access-token", resp?.access_token);
    localStorage.setItem("vin-auth-status", "true");
    setLoading(false);
    return window.location.assign("/");
  };

  const logout = () => {
    localStorage.removeItem("vin-access-token");
    localStorage.removeItem("vin-auth-status");
    setIsAuthenticated(false);

    navigate("/login");
  };

  return (
    <AuthCtx.Provider value={{ isAuthenticated, login, logout, loading }}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthCtx);

export default AuthProvider;
