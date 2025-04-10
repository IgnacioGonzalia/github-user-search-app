import { useTheme } from "../utils/ThemeContext";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";

const NavBar = () => {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div className="mt-8 mx-6 flex flex-row justify-between items-center p-6 transition-colors text-[var(--text)] md:mt-36 md:mx-24 xl:max-w-[730px] xl:mx-auto">
      <p className="space-mono bold text-[26px]">devfinder</p>
      <button
        className="flex flex-row justify-center items-center gap-4 cursor-pointer"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        <p className="space-mono bold text-sm tracking-[2.5px] uppercase">
          {darkTheme ? "Light" : "Dark"}
        </p>
        <img
          src={darkTheme ? SunIcon : MoonIcon}
          alt="Theme toggle"
          className="h-5 w-5"
        />
      </button>
    </div>
  );
};

export default NavBar;
