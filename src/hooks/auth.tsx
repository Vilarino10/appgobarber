import { useContext } from "react";

import {
  AuthContext,
  type AuthContextData,
} from "../context/AuthContext/context";

export default function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
