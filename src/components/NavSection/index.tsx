import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/avatar.jpg";

type Props = {
  children: React.JSX.Element;
};

const NavSection = ({ children }: Props) => {
  return (
    <section className={styles.navSection}>
      <nav>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <div className={styles.conta_link}>
          <Link className={styles.link} to="/conta">
            Conta
          </Link>
          <hr />
          <Link className={styles.link} to="/logout">
            Sair
          </Link>
        </div>
        <div className={styles.link_list}>
          <Link className={styles.link} to="/home">
            Home
          </Link>{" "}
          <hr />
          <Link className={styles.link} to="/biblioteca">
            Biblioteca
          </Link>
          <hr />
          <Link className={styles.link} to="/disciplinas">
            Disciplinas
          </Link>
          <hr />
          <Link className={styles.link} to="/boletim">
            Boletim
          </Link>
          <hr />
          <Link className={styles.link} to="/jogo">
            Jogar
          </Link>
        </div>
      </nav>
      {children}
    </section>
  );
};
export default NavSection;
