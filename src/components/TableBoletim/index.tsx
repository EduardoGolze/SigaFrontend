import styles from "./styles.module.scss";

type Props = {
  children: React.JSX.Element;
};

const TableBoletim = ({ children }: Props) => {
  return (
    <>
      <table className={styles.tabela}>
        <tbody>
          <tr>
            <th>Unidade Curricular</th>
            <th>CH</th>
            <th>Aulas</th>
            <th>Total Faltas</th>
            <th>% Faltas</th>
            <th>N1</th>
            <th>N2</th>
            <th>Média</th>
            <th>Situação</th>
            <th>Opções</th>
          </tr>
          {children}
        </tbody>
      </table>
    </>
  );
};

export default TableBoletim;
