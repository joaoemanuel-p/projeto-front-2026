import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <section className="cards">
      <Card title="Mural de aviso" items={[
        "Inscrição para o projeto de extensão",
        "Eleição para representante de turma"
      ]} />

      <Card title="Calendário Acadêmico" items={[
        "23/02 - Início do ano letivo 2026-1",
        "25/04 - Prazo final para aplicação da P1",
        "23/06 - Prazo final para aplicação da P2",
        "04/07 - Fim do período letivo 2026-1"
      ]} />

      <Card title="Minhas Disciplinas" items={[
        "BI e Data Warehousing",
        "Construção de Frontend"
      ]} />
    </section>
  );
}