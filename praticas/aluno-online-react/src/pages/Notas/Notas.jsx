import Layout from "../../components/Layout/Layout";
import "./Notas.css";

function Notas() {
  return (
    <Layout titulo="Minhas Notas">
      <div className="notas">
        <h2>Histórico de notas por semestre</h2>

        {/* 2026.1 */}
        <section>
          <h3>2026.1</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BI e Data Warehousing</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Construção de Frontend</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
              <tr>
                <td>Manutenção de Software e Devops</td>
                <td></td>
                <td></td>
                <td></td>
                <td>SR</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 2025.2 */}
        <section>
          <h3>2025.2</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Construção de Backend</td>
                <td>5.4</td>
                <td>6.2</td>
                <td></td>
                <td>MM</td>
              </tr>
              <tr>
                <td>Estrutura de Dados</td>
                <td>6.3</td>
                <td>6.1</td>
                <td></td>
                <td>MM</td>
              </tr>
              <tr>
                <td>Gerenciamento de Projetos</td>
                <td>7.4</td>
                <td>7.1</td>
                <td></td>
                <td>MS</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 2025.1 */}
        <section>
          <h3>2025.1</h3>
          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lógica de Programação</td>
                <td>8.0</td>
                <td>7.5</td>
                <td></td>
                <td>MS</td>
              </tr>
              <tr>
                <td>Banco de Dados</td>
                <td>6.5</td>
                <td>6.0</td>
                <td></td>
                <td>MM</td>
              </tr>
              <tr>
                <td>Engenharia de Software</td>
                <td>7.0</td>
                <td>7.2</td>
                <td></td>
                <td>MS</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}

export default Notas;