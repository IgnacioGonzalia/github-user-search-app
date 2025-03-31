import { useEffect, useState } from "react";
import "./App.css";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import colors from "./colors";

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  const handleThemeToggle = () => setDarkTheme((prevTheme) => !prevTheme);

  return (
    <div
      className="h-dvh w-dvw flex justify-center items-center"
      style={{
        backgroundColor: darkTheme
          ? colors.dark.background
          : colors.light.background,
      }}
    >
      <button
        className="p-4 flex flex-row justify-center items-center gap-4 rounded-md shadow-md space-mono"
        style={{
          backgroundColor: darkTheme
            ? colors.dark.cardBackground
            : colors.light.cardBackground,
          color: darkTheme ? colors.dark.title : colors.light.title,
        }}
        onClick={handleThemeToggle}
      >
        <p>{darkTheme ? "LIGHT" : "DARK"}</p>
        <img
          src={darkTheme ? SunIcon : MoonIcon}
          alt="Theme toggle"
          className="h-5 w-5"
        />
      </button>
    </div>
  );
}

export default App;
