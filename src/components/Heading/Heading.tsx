import styles from "./Heading.module.css";

export const Heading = (props: { children: string }) => {
  return <h1 className={styles.heading}>{props.children}</h1>;
};

export default Heading;
