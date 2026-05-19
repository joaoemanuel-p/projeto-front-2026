import SectionList from "../../components/SectionList/SectionList";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Bem-vindo ao portal do aluno</h2>

      <SectionList
        title="Mural de aviso"
        items={[
          "Inscrição para o projeto de extensão",
          "Eleição para representante de turma",
        ]}
      />

      <SectionList
        title="Calendário Acadêmico"
        items={[
          "23/02 - Início do ano letivo 2026-1",
          "25/04 - P1",
          "23/06 - P2",
          "04/07 - Fim do período letivo",
        ]}
      />

      <SectionList
        title="Minhas Disciplinas"
        items={[
          "BI e Data Warehousing",
          "Construção de Frontend",
          "DevOps",
        ]}
      />
    </div>
  );
}

export default Dashboard;