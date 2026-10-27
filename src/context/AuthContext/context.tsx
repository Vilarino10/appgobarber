import { createContext } from "react";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  user: object;
  signIn(data: { email: string; password: string }): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);
