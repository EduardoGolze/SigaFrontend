import styles from "./styles.module.scss";
import { useState } from "react";
import InputPassword from "../InputPassword";
import InputText from "../InputText";
import { useNavigate } from "react-router-dom";

type Props = {
  showLogin?: boolean;
  pageName?: string;
};
const mudarTema = (tema: string) => {
  const element = document.body;
  element.className = tema;
};
const Header = ({ showLogin }: Props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Sistema Acadêmico</h1>
      <div className={styles.temas}>
        <button
          onClick={() => {
            mudarTema("normal");
          }}
        >
          Normal
        </button>
        <button
          onClick={() => {
            mudarTema("escuro");
          }}
        >
          Escuro
        </button>
        <button
          onClick={() => {
            mudarTema("impressão");
          }}
        >
          Impressão
        </button>
      </div>

      {showLogin && (
        <form className={styles.login}>
          <InputText name="email" value={email} setter={setEmail} />
          <InputPassword
            name="Senha"
            value={password}
            setter={setPassword}
            invertColorIcon
          />
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            Logar
          </button>
        </form>
      )}
    </header>
  );
};

export default Header;
