import styles from "./styles.module.scss";

type Props = {
  periodo: number;
  children: React.JSX.Element;
};

const TableDisciplinas = ({ periodo, children }: Props) => {
  return (
    <>
      <h2>Disciplinas</h2>
      <h3> {periodo}º Período</h3>
      <table className={styles.tabela}>
        <tbody>
          <tr>
            <th>Disciplina</th>
            <th>Turno</th>
            <th>Total Aulas</th>
            <th>Carga horária</th>
            <th>Curso</th>
            <th>Professor</th>
            <th>Opções</th>
          </tr>
          {children}
        </tbody>
      </table>
    </>
  );
};

export default TableDisciplinas;
