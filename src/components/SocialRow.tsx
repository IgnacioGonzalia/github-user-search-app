import { useTheme } from "../utils/ThemeContext";

interface SocialRowProps {
  iconLight: string;
  iconDark: string;
  label: string | null | undefined;
  isLink?: boolean;
  socialText: string;
  styles: string;
  disabled: string;
  userblog: string;
}

const SocialRow = ({
  iconLight,
  iconDark,
  label,
  isLink = false,
  socialText,
  styles,
  disabled,
  userblog,
}: SocialRowProps) => {
  const { darkTheme } = useTheme();
  const icon = darkTheme ? iconDark : iconLight;
  const isAvailable = !!label;

  let textClass = socialText;
  let rowClass = styles;

  if (!isAvailable) {
    textClass += ` ${disabled}`;
    rowClass += ` ${disabled}`;
  }

  let displayLabel: React.ReactNode;
  if (!isAvailable) displayLabel = "Not Available";
  else if (isLink) {
    displayLabel = (
      <a className={userblog} href={label}>
        {label}
      </a>
    );
  } else displayLabel = label;

  return (
    <div className={rowClass}>
      <img src={icon} alt="Social icon" />
      <p className={textClass}>{displayLabel}</p>
    </div>
  );
};

export default SocialRow;
