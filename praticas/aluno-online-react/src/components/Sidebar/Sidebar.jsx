import React from "react";

export default function Sidebar() {
  return (
    <nav className="menu-lateral">
      <h2 className="logo">
        <img src="/learn.svg" alt="Logo Dashboard" />
        Aluno Online
      </h2>
      <ul>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="#">Faltas</a></li>
        <li><a href="#">Boletos</a></li>
        <li><a href="#">Requerimentos</a></li>
        <li><a href="login.html">Sair</a></li>
        <li><a href="#">Notas</a></li>
      </ul>
    </nav>
  );
}