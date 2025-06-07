import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import TableBoletim from "../../components/TableBoletim";

type Materia = {
  nome: string;
  professor: string;
  ch: number;
  aulas: number;
  totalFaltas: number;
  percentFaltas: number;
  n1: number;
  n2: number;
  situacao: string;
};

const Boletim = () => {
  const materias: Materia[] = [
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
    {
      nome: "Placeholder",
      professor: "Placeholder",
      ch: 11,
      aulas: 11,
      totalFaltas: 11,
      percentFaltas: 11,
      n1: 11,
      n2: 11,
      situacao: "Placeholder",
    },
  ];
  return (
    <>
      <Header pageName="Boletim" />
      <NavSection>
        <main>
          <TableBoletim>
            <>
              {materias.map((materia) => (
                <tr>
                  <td>
                    {materia.nome} <br /> <small>{materia.professor}</small>
                  </td>
                  <td>{materia.ch}</td>
                  <td>{materia.aulas}</td>
                  <td>{materia.totalFaltas}</td>
                  <td>{materia.percentFaltas}%</td>
                  <td>{materia.n1}</td>
                  <td>{materia.n2}</td>
                  <td>{(materia.n1 + materia.n2) / 2}</td>
                  <td>{materia.situacao}</td>
                  <td>
                    <button>Excluir</button>
                  </td>
                </tr>
              ))}
            </>
          </TableBoletim>
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Boletim;
