import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext({ curTheme: "light", darkTheme: () => {} });

export const ThemeProvider = UserContext.Provider;

export default function useTheme() {
  return useContext(UserContext);
}
