import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export const DefaultInput = ({ id, type, labelText }: DefaultInputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} />
    </>
  );
};
