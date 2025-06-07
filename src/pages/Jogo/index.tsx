import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputText from "../../components/InputText";
import JogoDaVelha from "../../components/JogoDaVelha";
import NavSection from "../../components/NavSection";
import styles from "./styles.module.scss";

const Jogo = () => {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");
  return (
    <>
      <Header pageName="Jogo" />
      <NavSection>
        <main>
          <h2>Jogo da Velha</h2>
          <div className={styles.divPlayers}>
            <InputText
              name="Gato"
              placeholder=" "
              label="Gato"
              value={jogador1}
              setter={setJogador1}
            />
            <InputText
              name="Cachorro"
              placeholder=" "
              label="Cachorro"
              value={jogador2}
              setter={setJogador2}
            />
            <button className={styles.saveBtn}>Salvar</button>
          </div>
          <JogoDaVelha />
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Jogo;
