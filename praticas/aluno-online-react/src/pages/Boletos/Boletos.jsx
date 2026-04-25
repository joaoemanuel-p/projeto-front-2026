import Layout from "../../components/Layout/Layout";
import "./Boletos.css";

function Boletos() {
  return (
    <Layout titulo="Meus Boletos">
      <div className="boletos">
        <h2>Histórico de pagamento</h2>

        <section>
          <table>
            <thead>
              <tr>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10/01/2026</td>
                <td>500,00</td>
                <td>Pago</td>
              </tr>
              <tr>
                <td>10/02/2026</td>
                <td>500,00</td>
                <td>Em atraso</td>
              </tr>
              <tr>
                <td>10/03/2026</td>
                <td>500,00</td>
                <td>A pagar</td>
              </tr>
              <tr>
                <td>10/04/2026</td>
                <td>500,00</td>
                <td>A pagar</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </Layout>
  );
}

export default Boletos;