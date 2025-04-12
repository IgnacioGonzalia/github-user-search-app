import { useTheme } from "../utils/ThemeContext";
import { useTranslation } from "react-i18next";
import MoonIcon from "../assets/icon-moon.svg";
import SunIcon from "../assets/icon-sun.svg";

const NavBar = () => {
  const { darkTheme, setDarkTheme } = useTheme();
  const { t } = useTranslation();
  const navbarContainer =
    "mt-8 mx-6 flex flex-row justify-between items-center p-6 transition-colors text-[var(--text)] md:mt-36 md:mx-24 lg:max-w-[730px] lg:mx-auto";
  const logoStyles = "space-mono bold text-[26px]";
  const themeToggleStyles =
    "flex flex-row justify-center items-center gap-4 cursor-pointer";
  const toggleTextStyles = "space-mono bold text-sm tracking-[2.5px] uppercase";
  const toggleIconStyles = "h-5 w-5";

  return (
    <div className={navbarContainer}>
      <p className={logoStyles}>devfinder</p>
      <button
        className={themeToggleStyles}
        onClick={() => setDarkTheme(!darkTheme)}
      >
        <p className={toggleTextStyles}>{darkTheme ? t("Light") : t("Dark")}</p>
        <img
          src={darkTheme ? SunIcon : MoonIcon}
          alt="Theme toggle"
          className={toggleIconStyles}
        />
      </button>
    </div>
  );
};

export default NavBar;
