import styles from "./styles.module.scss";
import olho from "../../assets/img/olho_aberto.jpg";
import fechado from "../../assets/img/olho_fechado.jpg";
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  invertColorIcon?: boolean;
};

const InputPassword = ({ name, value, setter, label }: Props) => {
  const [shouldShowPassword, setShowPassword] = useState(false);
  const switchShowPassword = () => {
    setShowPassword(!shouldShowPassword);
  };
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        type={shouldShowPassword ? "text" : "password"}
        placeholder={name}
        name={name}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
      />
      <img
        className={`${styles.icon} ${styles} olho`}
        src={shouldShowPassword ? olho : fechado}
        onClick={switchShowPassword}
      />
    </div>
  );
};
export default InputPassword;
