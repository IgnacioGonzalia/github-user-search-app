import { createContext, useContext, useEffect, useState, useMemo } from "react";
import colors from "../colors";

interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: (theme: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkTheme);
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
    document.body.style.backgroundColor = darkTheme
      ? colors.dark.background
      : colors.light.background;
  }, [darkTheme]);

  const value = useMemo(() => ({ darkTheme, setDarkTheme }), [darkTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
