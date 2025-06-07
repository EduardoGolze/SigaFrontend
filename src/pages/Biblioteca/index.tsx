import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import styles from "./styles.module.css";

const Biblioteca = () => {
  return (
    <>
      <Header pageName="Biblioteca" />
      <NavSection>
        <main>
          <h2>Biblioteca</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec molestie libero. Vestibulum sit amet scelerisque ligula, nec
            gravida est. Vestibulum sodales ac ipsum nec commodo. Sed ante ante,
            pharetra hendrerit odio a, aliquet cursus neque. Fusce eu ultrices
            dolor, nec euismod quam.
          </p>
          <b>List</b>
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec molestie libero. Vestibulum sit amet scelerisque ligula, nec
            gravida est. Vestibulum sodales ac ipsum nec commodo.
          </b>
          <ul>
            <li>
              <a href="http://ifms.edu.br" title="IFMS">
                IFMS
              </a>
            </li>
          </ul>
          <hr className={styles.separator} />
          <b>List</b>
          <ul>
            <li>
              <a href="http://ifms.edu.br" title="IFMS">
                IFMS
              </a>
            </li>
          </ul>
          <hr className={styles.separator} />
          <b>List</b>
          <ul>
            <li>
              <a href="http://ifms.edu.br" title="IFMS">
                IFMS
              </a>
            </li>
          </ul>
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Biblioteca;
