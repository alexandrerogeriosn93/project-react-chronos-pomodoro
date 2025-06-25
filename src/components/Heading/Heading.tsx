import styles from "./Heading.module.css";

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>;
};

export default Heading;
