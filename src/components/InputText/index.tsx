import styles from "./styles.module.css";

type Props = {
  name: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  placeholder?: string;
};

const InputText = ({ name, value, setter, label, placeholder }: Props) => {
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder || name}
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
      />
    </div>
  );
};

export default InputText;
