import SectionTable from "../../components/SectionTable/SectionTable";
import "./Requerimentos.css";

function Requerimentos() {
  return (
    <div className="requerimentos">
      <h2>Faça solicitações online para a secretaria</h2>

      <SectionTable
        title="Histórico"
        columns={["Tipo", "Data", "Situação"]}
        data={[
          ["Revisão de Menção", "19/01/2026", "Indeferido"],
          ["Dispensa", "19/01/2026", "Indeferido"],
          ["Trancamento", "19/01/2026", "Deferido"],
          ["Mudança de turno", "20/02/2026", "Em análise"],
          ["Renovação", "22/02/2026", "Deferido"],
        ]}
      />
    </div>
  );
}

export default Requerimentos;