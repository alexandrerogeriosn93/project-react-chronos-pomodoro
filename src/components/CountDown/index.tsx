import { HomeProps } from "../../pages/Home";
import styles from "./styles.module.css";

export const CountDown = ({ state }: HomeProps) => {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
};
