import React from "react";

import AuthProvider from "../context/AuthContext";

interface childrenProblem {
  children: React.ReactNode;
}

const AppProvider: React.FC<childrenProblem> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
