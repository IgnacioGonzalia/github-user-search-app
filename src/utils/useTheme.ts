import { useState, useEffect } from "react";
import colors from "../colors";

const useTheme = () => {
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

  return { darkTheme, setDarkTheme };
};

export default useTheme;
