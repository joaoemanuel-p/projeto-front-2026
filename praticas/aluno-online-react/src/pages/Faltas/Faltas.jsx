import Layout from "../../components/Layout/Layout";
import SectionTable from "../../components/SectionTable/SectionTable";
import "./Faltas.css";

function Faltas() {
  return (
    <Layout titulo="Minhas Faltas">
      <div className="faltas">
        <h2>Histórico de faltas</h2>

        <SectionTable
          title="2026.1"
          columns={["Disciplina", "Faltas", "% Presença"]}
          data={[
            ["BI e Data Warehousing", "0", "100%"],
            ["Frontend", "0", "100%"],
            ["DevOps", "0", "100%"],
          ]}
        />

        <SectionTable
          title="2025.2"
          columns={["Disciplina", "Faltas", "% Presença"]}
          data={[
            ["Backend", "27", "87.5%"],
            ["Estrutura de Dados", "9", "85%"],
            ["GP", "10.5", "82.5%"],
          ]}
        />
        <SectionTable
          title="2025.1"
          columns={["Disciplina", "Faltas", "% Presença"]}
          data={[
            ["Backend", "27", "87.5%"],
            ["Estrutura de Dados", "9", "85%"],
            ["GP", "10.5", "82.5%"],
          ]}
        />
      </div>
    </Layout>
  );
}

export default Faltas;