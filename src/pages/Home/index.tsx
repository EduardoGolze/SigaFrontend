import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <>
      <Header pageName="Home" />
      <NavSection>
        <>
          <main className={styles.main}>
            <h2>Hallo!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec molestie libero. Vestibulum sit amet scelerisque ligula, nec
              gravida est. Vestibulum sodales ac ipsum nec commodo. Sed ante
              ante, pharetra hendrerit odio a, aliquet cursus neque. Fusce eu
              ultrices dolor, nec euismod quam. Nullam dapibus eu ante sed
              tempus. Vivamus pellentesque egestas efficitur. Phasellus
              hendrerit porta velit eu lacinia. Vivamus tellus arcu, fermentum
              sit amet cursus a, finibus ut tellus. Pellentesque mollis nisi
              vitae arcu lacinia, vestibulum fringilla lorem ultrices. Aenean
              vitae leo quam.
            </p>
            <p>
              Sed quam eros, sollicitudin ut eleifend a, luctus non nunc.
              Suspendisse diam neque, fermentum et luctus vitae, tristique non
              metus. Praesent porta nunc ornare, faucibus odio ac, sagittis
              nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi quis diam velit. Mauris tempor enim quis risus semper, et
              ullamcorper justo rhoncus. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Morbi
              congue dolor eget sapien eleifend fermentum. Aliquam placerat
              suscipit mauris, semper gravida purus tempus viverra. Nulla ipsum
              dolor, rutrum ut posuere quis, lacinia sit amet purus. Etiam
              molestie urna quis porta sagittis. Quisque mattis leo vel placerat
              hendrerit.
            </p>
            <p>
              Pellentesque mollis purus quam, et mollis neque feugiat luctus.
              Etiam bibendum nisl id leo blandit egestas. Phasellus aliquam
              ullamcorper nulla nec sollicitudin. Cras lobortis metus nec quam
              dignissim, et iaculis mauris volutpat. Mauris et vulputate lectus.
              Aenean ac nisi laoreet, blandit mauris facilisis, pharetra nulla.
              Nullam non eros malesuada, maximus eros a, facilisis lectus.
              Pellentesque auctor laoreet posuere. Cras dictum tincidunt libero,
              vel efficitur lorem sodales nec.
            </p>
            <p>
              Morbi eu lorem odio. Morbi eget nisl efficitur, feugiat felis nec,
              laoreet nisl. Nullam ornare, lorem non ullamcorper cursus, dui
              nulla vulputate lacus, sed ornare nulla lacus sit amet felis.
              Nullam venenatis nisi a ligula pharetra, ac eleifend neque tempor.
              Vivamus vitae felis sem. Integer ut commodo augue. Vestibulum
              posuere ultricies lorem, at tempor ex ultrices ac. Curabitur
              aliquam laoreet tellus vulputate gravida. Vivamus vehicula
              lobortis odio vel efficitur.
            </p>
            <p>
              Vivamus tincidunt tristique libero. Aenean bibendum malesuada
              efficitur. Suspendisse potenti. Aenean mi erat, ultrices id
              dapibus non,
            </p>
          </main>
          <aside className={styles.aside}>
            <h2>Últimas notícias</h2>
            <span>Aberto processo seletivo</span>
          </aside>
        </>
      </NavSection>
      <Footer />
    </>
  );
};
export default Home;
