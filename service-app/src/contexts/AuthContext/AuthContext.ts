import { createContext } from "react";

interface AuthContextInterface {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);
