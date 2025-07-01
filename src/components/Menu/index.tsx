import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

import styles from "./styles.module.css";

export const Menu = () => {
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
      >
        <SunIcon />
      </a>
    </nav>
  );
};
