import Layout from "../../components/Layout/Layout";
import SectionTable from "../../components/SectionTable/SectionTable";
import "./Boletos.css";

function Boletos() {
  return (
    <Layout titulo="Meus Boletos">
      <div className="boletos">
        <h2>Histórico de pagamento</h2>

        <SectionTable
          title="Boletos"
          columns={["Vencimento", "Valor", "Situação"]}
          data={[
            ["10/01/2026", "500,00", "Pago"],
            ["10/02/2026", "500,00", "Em atraso"],
            ["10/03/2026", "500,00", "A pagar"],
            ["10/04/2026", "500,00", "A pagar"],
            ["10/03/2026", "500,00", "A pagar"],
            ["10/04/2026", "500,00", "A pagar"],
            ["10/03/2026", "500,00", "A pagar"],
            ["10/04/2026", "500,00", "A pagar"],
            ["10/03/2026", "500,00", "A pagar"],
            ["10/04/2026", "500,00", "A pagar"],
            ["10/03/2026", "500,00", "A pagar"],
            ["10/04/2026", "500,00", "A pagar"],
          ]}
        />
      </div>
    </Layout>
  );
}

export default Boletos;