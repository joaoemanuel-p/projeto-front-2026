import Layout from "../../components/Layout/Layout";
import "./Requerimentos.css";

function Requerimentos() {
  return (
    <Layout titulo="Meus Requerimentos">
      <div className="requerimentos">
        <h2>Faça solicitação online</h2>

        <section>
          <table>
            <thead>
              <tr>
                <th>Tipo de requerimentos</th>
                <th>Data de solicitação</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Revisão de Menção</td>
                <td>19/01/2026</td>
                <td>Indeferido</td>
              </tr>
              <tr>
                <td>Dispensa de disciplina</td>
                <td>19/01/2026</td>
                <td>Indeferido</td>
              </tr>
              <tr>
                <td>Trancamento de matrícula</td>
                <td>19/01/2026</td>
                <td>Deferido</td>
              </tr>
              <tr>
                <td>Mudança de turno</td>
                <td>20/02/2026</td>
                <td>Em análise</td>
              </tr>
              <tr>
                <td>Renovação de matrícula</td>
                <td>22/02/2026</td>
                <td>Deferido</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}

export default Requerimentos;