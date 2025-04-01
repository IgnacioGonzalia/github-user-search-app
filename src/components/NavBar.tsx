import useTheme from "../utils/useTheme";
import colors from "../colors";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";

const NavBar = () => {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div className="mt-8 mx-6 flex flex-row justify-between items-center md:mt-36 md:mx-24 lg:max-w-[730px] lg:mx-auto">
      <p
        className="space-mono bold text-[26px]"
        style={{ color: darkTheme ? colors.dark.logo : colors.light.logo }}
      >
        devfinder
      </p>
      <button
        className="flex flex-row justify-center items-center gap-4 cursor-pointer"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        <p
          className="space-mono bold text-sm tracking-[2.5px]"
          style={{ color: darkTheme ? colors.dark.text : colors.light.text }}
        >
          {darkTheme ? "LIGHT" : "DARK"}
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
