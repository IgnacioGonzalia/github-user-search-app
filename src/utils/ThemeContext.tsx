import { createContext, useContext, useEffect, useState, useMemo } from "react";

interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  const value = useMemo(() => ({ darkTheme, setDarkTheme }), [darkTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
