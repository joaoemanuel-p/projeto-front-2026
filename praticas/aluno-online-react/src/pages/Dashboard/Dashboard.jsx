import Layout from "../../components/Layout/Layout";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Layout titulo="Olá, Aluno!">
      <div className="dashboard">
        <h2>Bem vindo ao portal do aluno</h2>

        <section>
          <h3>Mural de aviso</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
          </ul>
        </section>

        <section>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do ano letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </section>

        <section>
          <h3>Minhas Disciplinas</h3>
          <ul>
            <li>BI e Data Warehousing</li>
            <li>Construção de Frontend</li>
            <li>DevOps</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export default Dashboard;