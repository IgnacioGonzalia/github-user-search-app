import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import "./App.css";

const ThemeToggle = () => {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className="flex items-center gap-3 text-sm tracking-widest uppercase space-mono bold"
    >
      {darkTheme ? "Light" : "Dark"}
      <img
        src={darkTheme ? SunIcon : MoonIcon}
        alt="Theme icon"
        className="w-5 h-5"
      />
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="h-full w-full flex items-center justify-center transition-colors duration-300">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
