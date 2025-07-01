import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

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
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
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
        <SunIcon />
      </a>
    </nav>
  );
};
