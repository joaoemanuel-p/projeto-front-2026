import SectionTable from "../../components/SectionTable/SectionTable";
import "./Notas.css";

function Notas() {
  return (
    <div className="notas">
      <h2>Histórico de notas por semestre</h2>

      <SectionTable
        title="2026.1"
        columns={["Disciplina", "A1", "A2", "A3", "Menção"]}
        data={[
          ["BI e Data Warehousing", "", "", "", "SR"],
          ["Construção de Frontend", "", "", "", "SR"],
          ["DevOps", "", "", "", "SR"],
        ]}
      />

      <SectionTable
        title="2025.2"
        columns={["Disciplina", "A1", "A2", "A3", "Menção"]}
        data={[
          ["Backend", "5.4", "6.2", "", "MM"],
          ["Estrutura de Dados", "6.3", "6.1", "", "MM"],
          ["GP", "7.4", "7.1", "", "MS"],
        ]}
      />

      <SectionTable
        title="2025.1"
        columns={["Disciplina", "A1", "A2", "A3", "Menção"]}
        data={[
          ["Backend", "5.4", "6.2", "", "MM"],
          ["Estrutura de Dados", "6.3", "6.1", "", "MM"],
          ["GP", "7.4", "7.1", "", "MS"],
        ]}
      />
    </div>
  );
}

export default Notas;