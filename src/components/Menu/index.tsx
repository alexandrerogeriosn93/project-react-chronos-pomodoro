import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = { dark: <SunIcon />, light: <MoonIcon /> };

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        to="/"
        className={styles.menuLink}
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </Link>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Altera tema"
        title="Alterar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
};
