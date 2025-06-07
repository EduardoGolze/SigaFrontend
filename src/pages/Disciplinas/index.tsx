import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import TableDisciplinas from "../../components/TableDisciplinas";

type Disciplina = {
  nome: string;
  turno: string;
  totalAula: number;
  cargaHoraria: number;
  curso: string;
  professor: string;
};

const Disciplinas = () => {
  const disciplinas: Disciplina[] = [
    {
      nome: "Placeholder",
      turno: "Placeholder",
      totalAula: 11,
      cargaHoraria: 11,
      curso: "Placeholder",
      professor: "Placeholder",
    },
  ];

  return (
    <>
      <Header pageName="Disciplinas" />
      <NavSection>
        <main>
          <TableDisciplinas periodo={1}>
            <>
              {disciplinas.map((disciplina) => (
                <tr>
                  <td>{disciplina.nome}</td>
                  <td>{disciplina.turno}</td>
                  <td>{disciplina.totalAula}</td>
                  <td>{disciplina.cargaHoraria}</td>
                  <td>{disciplina.curso}</td>
                  <td>{disciplina.professor}</td>
                  <td>
                    <button>Excluir</button>
                  </td>
                </tr>
              ))}
            </>
          </TableDisciplinas>
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Disciplinas;
