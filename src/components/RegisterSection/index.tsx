import { useState } from "react";
import styles from "./styles.module.scss";
import TipoUsuario from "../../enums/TipoUsuario";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import { Link } from "react-router-dom";
import InputImage from "../InputImage";
import InputDate from "../InputDate";

const RegisterSection = () => {
  const [selectedTipe, setSelectedType] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");

  return (
    <section className={styles.section}>
      <nav>
        <p>
          <Link to="https://www.ifms.edu.br/">Site do IFMS</Link>
        </p>
        <hr />
      </nav>
      <main>
        <h2>Cadastre-se</h2>
        <form action="">
          <div>
            <label className={styles.label} htmlFor="tipo_user">
              Cadastre-se como:
            </label>
            <select
              name="tipo_user"
              value={selectedTipe}
              onChange={(e) => {
                e.preventDefault();
                setSelectedType(e.target.value);
              }}
            >
              <option value={TipoUsuario.estudante}>Estudante</option>
              <option value={TipoUsuario.professor}>Professor</option>
            </select>
          </div>
          <InputText
            name="nome"
            value={userName}
            setter={setUserName}
            label="Nome"
          />
          <InputText
            name="email"
            value={userEmail}
            setter={setUserEmail}
            label="Email"
          />
          <InputPassword
            name="senha"
            setter={setUserPassword}
            value={userPassword}
            label="Senha"
          />
          <InputPassword
            name="repita a senha"
            setter={setUserConfirmPassword}
            value={userConfirmPassword}
            label="Repita a senha"
          />
          <InputImage
            value={userPicture}
            setter={setUserPicture}
            name="foto"
            label="Foto"
          />
          <InputText
            name="CPF"
            value={userCpf}
            setter={setUserCpf}
            label="CPF (somente números)"
          />
          <InputDate
            value={userBirthDate}
            setter={setUserBirthDate}
            name="nascimento"
            label="Data de Nascimento"
          />
          <button
            className={styles.submitBtn}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Cadastre-se
          </button>
        </form>
      </main>
      <aside className={styles.aside}>
        <h2>Últimas notícias</h2>
        <span>Aberto processo seletivo</span>
      </aside>
    </section>
  );
};
export default RegisterSection;
