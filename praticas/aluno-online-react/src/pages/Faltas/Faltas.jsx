import Layout from "../../components/Layout/Layout";
import "./Faltas.css";

function Faltas() {
  return (
    <Layout titulo="Minhas Faltas">
      <div className="faltas">
        <h2>Histórico de faltas por semestre</h2>

        <section>
          <h3>2026.1</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td>0</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td>0</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>2025.2</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>27</td>
                <td>87.5%</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>9</td>
                <td>85%</td>
              </tr>
              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>10.5</td>
                <td>82.5%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3>2025.1</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lógica de Programação</td>
                <td>3</td>
                <td>92%</td>
              </tr>
              <tr>
                <td>Banco de Dados</td>
                <td>5</td>
                <td>90%</td>
              </tr>
              <tr>
                <td>Algoritmos</td>
                <td>2</td>
                <td>95%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}

export default Faltas;