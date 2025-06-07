import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import avatar from "../../assets/img/avatar.jpg";
import styles from "./styles.module.css";
import InputText from "../../components/InputText";
import { useState } from "react";
import InputPassword from "../../components/InputPassword";
import InputImage from "../../components/InputImage";

const Conta = () => {
  const [userName, setUserName] = useState("Nome do Usuário");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPicture, setUserPicture] = useState("");

  return (
    <>
      <Header pageName="Conta" />
      <NavSection>
        <main>
          <form className={styles.form}>
            <h2>Editar Conta</h2>
            <img src={avatar} className={styles.avatar} alt="foto Perfil" />

            <InputImage
              value={userPicture}
              setter={setUserPicture}
              name="foto"
              label="Foto"
            />

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

            <button className={styles.savebtn} id="savebtn" type="submit">
              Salvar
            </button>
          </form>
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Conta;
