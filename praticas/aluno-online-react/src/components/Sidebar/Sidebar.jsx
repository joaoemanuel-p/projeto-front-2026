import "./Sidebar.css";

export default function Sidebar() {
  return (
    <nav className="menu-lateral">
      <h2 className="logo">
        <img src="/learn.svg" alt="Logo Aluno Online" />
        Aluno Online
      </h2>

      <ul>
        <li>Dashboard</li>
        <li>Notas</li>
        <li>Faltas</li>
        <li>Boletos</li>
        <li>Requerimentos</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}