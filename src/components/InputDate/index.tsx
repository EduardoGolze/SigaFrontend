import styles from "./styles.module.css";

type Props = {
  name: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
};

const InputDate = ({ name, value, setter, label }: Props) => {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}:
        </label>
      )}
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
      />
    </div>
  );
};

export default InputDate;
