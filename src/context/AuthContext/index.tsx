import React, { useCallback, useState, useEffect } from "react";
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import api from "../../services/api";

import { AuthContext } from "./context";
import type { SignInCredentials } from "./context";

const storage = createAsyncStorage("@GoBarber");

interface AuthState {
  token: string;
  user: object;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const { "@GoBarber:token": token, "@GoBarber:user": user } =
        await storage.getMany(["@GoBarber:token", "@GoBarber:user"]);

      if (token && user) {
        setData({
          token,
          user: JSON.parse(user),
        });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    await storage.setMany({
      "@GoBarber:token": token,
      "@GoBarber:user": JSON.stringify(user),
    });

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await storage.removeMany(["@GoBarber:token", "@GoBarber:user"]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
